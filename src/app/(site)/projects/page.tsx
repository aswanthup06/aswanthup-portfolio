"use client";
import { useState } from "react";
import Link from "next/link";

export default function Projects() {
  const [active, setActive] = useState("All");

  const categories = [
    "All",
    "Web Application",
    "UI Design",
    "Website",
    "Graph Design",
    "Drawings",
  ];

  const projects = [
     {
      title: "Happy ERP",
      slug: "/projects/happy-erp",
      category: ["Web Application","UI Design"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tech: ["ReactJS", "Bootstrap 5"],
    },
    {
      title: "ZENOWAY",
      slug: "/projects/zenoway",
      category: ["Web Application", "UI Design"],
      image:
        "https://images.unsplash.com/photo-1582079767878-082f4300d386?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["NextJS", "Tailwind CSS"],
    },

      {
      title: "Doctor One",
      slug: "/projects/doctor-one",
      category: ["Web Application", "UI Design"],
      image:
        "doctor.jpg",
      tech: ["ReactJS", "Tailwind CSS"],
    },
   
    {
      title: "NVOCC",
      slug: "/projects/nvocc",
      category: ["Web Application"],
      image:
        "/ship.webp",
      tech: ["NextJS", "Tailwind CSS"],
    },
     {
      title: "Fotiq",
      slug: "https://www.fotiq.uk/",
      category: ["Website"],
      image: "web3.png",
      tech: ["React", "TailwindCSS"],
    },
    {
      title: "Studio1Life",
      slug: "https://studio1life.com/",
      category: ["Website"],
      image: "web1.png",
      tech: ["React", "Bootstrap"],
    },
    {
      title: "Car Care Mechanic",
      slug: "https://carcaremechanic.com/",
      category: ["Website"],
      image: "web2.png",
      tech: ["React", "TailwindCSS"],
    },
      {
      title: "Kathakali & Theyyam",
      slug: "/projects/kathakali",
      category: ["Graph Design"],
      image: "/kadha.webp",
      tech: ["Illustrator"],
    },
          {
      title: "DR1 - Icon Design",
      slug: "/projects/icon",
      category: ["Graph Design"],
      image: "/Pharmacy.webp",
      tech: ["Illustrator"],
    },
    {
      title: "ASTRO BYTE",
      slug: "/projects/astrobyte",
      category: ["Graph Design"],
      image: "/poster1.png",
      tech: ["Photoshop"],
    },
    {
      title: "Chaavie Solutions Poster",
      slug: "/projects/chaaviesolutions",
      category: ["Graph Design"],
      image: "/poster2.png",
      tech: ["Photoshop"],
    },
    {
      title: "EID Poster",
      slug: "/projects/eidposter",
      category: ["Graph Design"],
      image: "/poster3.png",
      tech: ["Photoshop"],
    },
    {
      title: "Sketch Art",
      slug: "/projects/sketch-art",
      category: ["Drawings"],
      image: "/drawing.png",
      tech: ["Pencil Art"],
    },
   
  ];

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <div className="relative min-h-screen px-6 py-24">
      <div className="absolute inset-0 grid-bg z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 pt-12">
  Crafted Digital Experiences
</h1>

<p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto pb-12">
  A collection of UI development, design, branding, and creative works
  built with attention to detail and user-focused thinking.
</p>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm rounded-full transition ${
                active === cat
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, i) => (
            <Link href={item.slug} key={i}>
              <div className="group overflow-hidden transition cursor-pointer">
                <div className="rounded-2xl overflow-hidden relative">
                  <img
                    src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
                    className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
                    alt={item.title}
                  />

                  <div className="absolute w-full top-0 flex flex-col justify-between h-full">
                    {/* TECH TAGS */}
                    <div className="flex gap-2 p-4 flex-wrap">
                      {item.tech.map((tech, index) => (
                        <h1
                          key={index}
                          className={`px-3 py-1 text-xs rounded-full ${
                            index === 0
                              ? "bg-white/50 backdrop-blur-sm text-black"
                              : "bg-black/50 text-white"
                          }`}
                        >
                          {tech}
                        </h1>
                      ))}
                    </div>

                    {/* BOTTOM CONTENT */}
                    <div className="relative overflow-hidden p-4 pt-8">
                      <div className="absolute bottom-0 left-0 w-full h-24 backdrop-blur-sm mask-[linear-gradient(to_top,black,transparent)]"></div>

                      <div className="absolute bottom-0 left-0 w-full h-20 backdrop-blur-md mask-[linear-gradient(to_top,black,transparent)]"></div>

                      <div className="absolute bottom-0 left-0 w-full h-16 backdrop-blur-xl mask-[linear-gradient(to_top,black,transparent)]"></div>

                      <h3 className="relative z-10 text-md font-semibold text-white mt-1">
                        {item.title}
                      </h3>

                 <div className="flex flex-wrap relative z-10 mt-2 text-xs text-blue-300">
  {item.category.map((cat, index) => (
    <span key={index} className="flex items-center">
      <span>{cat}</span>

      {index < item.category.length - 1 && (
        <span className="mx-1">&</span>
      )}
    </span>
  ))}
</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}