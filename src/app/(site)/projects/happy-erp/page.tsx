export default function HappyERPPage() {
  const screens = [
    {
      id: 1,
      image: "/happy1.png",
      alt: "Dashboard",
      title: "Dashboard Overview",
      description: "Real-time metrics",
    },
    {
      id: 2,
      image: "/happy2.png",
      alt: "Inventory",
      title: "Inventory Management",
      description: "Stock levels and product tracking",
    },
    {
      id: 3,
      image: "/happy3.png",
      alt: "Orders",
      title: "Product list",
      description: "Product list and details",
    },
    {
      id: 4,
      image: "/happy4.png",
      alt: "Analytics",
      title: "Sales Orders",
      description: "Sales orders and status",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black ">
      {/* <div className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Portfolio</span>
            <span>→</span>
            <span className="text-gray-600">HAPPY ERP</span>
          </div>
        </div>
      </div> */}

      {/* HERO SECTION - Project Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 lg:py-24 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-16">
          {/* Left: Project info */}
          <div>
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 bg-gray-900 text-white text-xs rounded-full">
                Case Study
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                2024
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              HAPPY ERP
            </h1>
            <p className="text-xl text-gray-500 mt-4">
              Enterprise Resource Planning for Toy Businesses
            </p>

            <div className="h-1 w-12 bg-gray-900 mt-8"></div>

            <p className="text-gray-600 leading-relaxed mt-8">
              HAPPY is a comprehensive ERP platform built specifically for toy
              manufacturers and distributors. The system handles inventory,
              supplier management, customer orders, and business analytics in
              one unified dashboard.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-6 mt-10 pt-6 border-t border-gray-100">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Timeline
                </p>
                <p className="font-medium text-gray-800 mt-1">3 Months</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Role
                </p>
                <p className="font-medium text-gray-800 mt-1">
                  UI/UX Designer & Developer
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Tech Stack
                </p>
                <p className="font-medium text-gray-800 mt-1">
                  React, Bootstrap
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Deliverables
                </p>
                <p className="font-medium text-gray-800 mt-1">
                  40+ Screens, Design System
                </p>
              </div>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="grid grid-cols-3  gap-4 items-center">
            <img
              src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="HAPPY ERP Dashboard Preview"
              className=" h-90 object-cover mt-28 rounded-lg"
            />{" "}
            <img
              src="https://plus.unsplash.com/premium_photo-1701984401543-4b635f3a03b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="HAPPY ERP Dashboard Preview"
              className=" h-90 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1484820540004-14229fe36ca4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="HAPPY ERP Dashboard Preview"
              className="mt-28 h-90 object-cover  rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Overview
            </h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Toy businesses face unique challenges: seasonal demand
              fluctuations, complex supplier networks, and managing hundreds of
              SKUs across different product lines.
            </p>
            <p className="text-gray-500 mt-4 leading-relaxed">
              HAPPY ERP was designed to solve these problems by providing a
              centralized platform that connects inventory, sales, procurement,
              and analytics.
            </p>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-rows-3 gap-4">
            <div className="bg-white rounded-xl border border-gray-100 flex items-center gap-3 p-4">
              <p className="text-2xl font-bold text-gray-900 bg-gray-100 w-20 flex justify-center h-full items-center rounded-sm">
                40+
              </p>
              <p className="text-md text-gray-500 mt-1">Custom Screens</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 flex items-center gap-3 p-4">
              <p className="text-2xl font-bold text-gray-900 bg-gray-100 w-20 flex justify-center h-full items-center rounded-sm p-2">
                5
              </p>
              <p className="text-md text-gray-500 mt-1">Core Modules</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 flex items-center gap-3 p-4">
              <p className="text-2xl font-bold text-gray-900 bg-gray-100 w-20 flex justify-center h-full items-center rounded-sm">
                100%
              </p>
              <p className="text-md text-gray-500 mt-1">Responsive Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE & SOLUTION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                The Challenge
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                The client was managing inventory across spreadsheets, leading
                to stockouts, overstocking, and delayed order fulfillment. Teams
                had no visibility into supplier performance or sales trends,
                making data-driven decisions impossible.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                The Solution
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                A unified ERP platform with real-time inventory tracking,
                automated purchase orders, customer management, and an analytics
                dashboard that provides actionable insights for business owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MY ROLE */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight text-center">
            My Role
          </h2>
          <p className="text-gray-500 text-center mt-3 max-w-2xl mx-auto">
            End-to-end design and development of the HAPPY ERP platform
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">UI/UX Design</h3>
              <p className="text-sm text-gray-500 mt-2">
                Wireframes, mockups, design system
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">
                Frontend Development
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                React components, responsive layouts
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Integration</h3>
              <p className="text-sm text-gray-500 mt-2">API integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight text-center">
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Inventory Management
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Real-time stock tracking, low stock alerts, and automated
                  reorder suggestions
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Supplier Management
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Track supplier performance, manage purchase orders, and vendor
                  communications
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Customer Management
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Centralized customer database, order history, and
                  communication logs
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Analytics Dashboard
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Sales trends, inventory insights, and business performance
                  metrics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN GALLERY */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight text-center">
            Screens & Interfaces
          </h2>

          <p className="text-gray-500 text-center mt-3">
            A selection of key screens from the HAPPY ERP platform
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {screens.map((screen) => (
              <div key={screen.id} className="overflow-hidden">
                <img
                  src={screen.image}
                  alt={screen.alt}
                  className="w-full shadow-sm rounded-lg"
                />
                <div className="mt-4">
                  <p className="font-medium text-gray-800">{screen.title}</p>

                  <p className="text-sm text-gray-400">{screen.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-900 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              The Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div>
                <p className="text-4xl font-bold text-white">60%</p>
                <p className="text-gray-400 text-sm mt-2">
                  Reduction in manual data entry
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">2x</p>
                <p className="text-gray-400 text-sm mt-2">
                  Faster order processing
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">100%</p>
                <p className="text-gray-400 text-sm mt-2">
                  Inventory accuracy achieved
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNINGS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight text-center">
            Key Learnings
          </h2>
          <div className="mt-8 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <p className="text-gray-600 leading-relaxed">
                Building a complex ERP system taught me the importance of
                scalable component architecture and state management. The
                dashboard required real-time data synchronization across
                multiple modules.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <p className="text-gray-600 leading-relaxed">
                Working closely with stakeholders helped me understand how to
                translate business requirements into intuitive UI that
                non-technical users can navigate efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
