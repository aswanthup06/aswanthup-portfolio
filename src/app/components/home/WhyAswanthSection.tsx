import { LuCircleArrowRight } from "react-icons/lu";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

const strengths: string[] = [
  "Pixel-Perfect UI Development",
  "99% Figma to Code Accuracy",
  "Clean & Scalable Code",
  "Detail-Oriented Execution",
];

export default function WhyAswanthSection() {
  return (
    <section className="w-full ">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="max-w-2xl">
          <h1 className="font-bold text-sm md:text-base">Why Aswanth?</h1>

          <h1 className="text-3xl text-slate-500/60 leading-snug mt-2">
            Blending UI design and development into seamless products.
          </h1>
        </div>

        {/* Main Grid */}
        <div className=" bg-gray-600/10 w-full mt-10 p-2 grid md:grid-cols-2 lg:grid-cols-3 gap-2 rounded-2xl">
          {/* ========================================= */}
          {/* 1st Column */}
          {/* ========================================= */}

          <div className="bg-white rounded-xl overflow-hidden relative h-200 sm:min-h-170 lg:h-full  group">
            {/* Overlay Content */}
            <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between bg-gradient-to-b from-black/20 via-black/10 to-black/60 text-white transition-all duration-500 group-hover:backdrop-blur-sm">
              {/* Top Content */}
              <div>
                <div className="w-fit  px-3 py-1 rounded-sm bg-white/10 border border-white/10 backdrop-blur-md text-[11px] tracking-[0.2em] uppercase text-white/90">
                  Work Approach
                </div>

                <div className="max-w-sm">
                  <h1 className="text-3xl font-bold leading-tight mt-6">
                    Designing Interfaces
                    <br />
                    That Feel Natural
                  </h1>

                  <p className="text-sm leading-relaxed text-white/75 mt-2">
                    I bridge the gap between UI design and frontend development
                    by crafting modern digital products that are responsive
                    across all devices.
                  </p>
                </div>
              </div>

              {/* Bottom Content */}
              <div>
                {/* Strength List */}
                <div className="flex flex-col gap-3">
                  {strengths.map((item: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-400/10 border border-blue-300/20 flex items-center justify-center">
                        <LuCircleArrowRight className="text-blue-200 text-sm" />
                      </div>

                      <h1 className="text-sm text-white/90 font-medium">
                        {item}
                      </h1>
                    </div>
                  ))}
                </div>

                {/* Bottom Small Info */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <div>
                    <h1 className="text-lg font-semibold">
                      UI Developer & Designer
                    </h1>

                    <p className="text-xs text-white/60 mt-1">
                      Focused on scalable frontend experiences.
                    </p>
                  </div>

                  <Link  href="/about" className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 duration-300 cursor-pointer">
                    <MdOutlineArrowOutward className="text-lg" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Background Image */}
            <img
              src="/bg2.jpg"
              alt="UI Development Workspace"
              className="h-full w-full object-cover scale-100 group-hover:scale-105 duration-700"
            />
          </div>
          <div className="sm:min-h-170 h-190 lg:h-full grid grid-rows-[190px_1fr] gap-2">
            {/* Accuracy Card */}

            <div className="p-5 bg-white rounded-xl border border-gray-200 flex flex-col justify-between overflow-hidden">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs tracking-widest uppercase text-blue-500 font-semibold">
                    Figma To Code
                  </p>

                  <h1 className="text-5xl font-black text-black mt-3">99%</h1>
                </div>

                <div className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold">
                  Verified
                </div>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed mt-4">
                Pixel-perfect frontend implementation using Figma Dev Mode, Auto
                Layout, reusable components, and responsive UI systems.
              </p>
            </div>

            {/* Showcase Card */}

            <div className="rounded-xl overflow-hidden relative h-full border border-gray-200">
              <div className="absolute inset-0 p-5 h-full flex flex-col justify-between w-full hover:backdrop-blur-xs duration-500 z-10">
                <div className="w-fit px-3 py-1 rounded-sm bg-white/10 backdrop-blur-md text-white text-xs tracking-widest uppercase">
                  Design To Development
                </div>

                <div>
                  <img src="/Home.png" className="rounded-xl" alt="" />
                </div>

                <div className="border-white/10 bg-white/5 backdrop-blur-sm rounded-xl p-4 border">
                  <h1 className="text-white text-xl font-semibold leading-tight">
                    From Design To Live Product
                  </h1>

                  <p className="text-white/70 text-sm leading-relaxed mt-3">
                    Explore the original design file and the final developed
                    frontend experience.
                  </p>

                  <div className="flex gap-3 mt-5 flex-wrap">
                    <a target="_blank" href="https://www.figma.com/design/4RJXqMbDXP8MuLAeBXF0Ih/Dashboard-UI?node-id=0-1&t=jJTB5a9L2tY9fhRu-1" className="w-fit flex gap-2 items-center bg-white text-black px-4 py-2 rounded-sm text-xs tracking-wide cursor-pointer">
                      Figma File <MdOutlineArrowOutward />
                    </a>

                    <a href="https://dashboard-ui-five-umber.vercel.app/" target="_blank" className="w-fit flex gap-2 items-center bg-black text-white px-4 py-2 rounded-sm text-xs tracking-wide cursor-pointer border border-white/10">
                      View Live <MdOutlineArrowOutward />
                    </a>
                  </div>
                </div>
              </div>

              <img
                // src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1600&auto=format&fit=crop"
                src="/Dashboard.png"
                alt="Figma to Frontend Development"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* ========================================= */}
          {/* 3rd Column */}
          {/* ========================================= */}

          <div className="h-full grid gap-2">
            {/* Top Card */}

            <div className="bg-white rounded-xl p-5 border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-blue-500 font-semibold">
                      Redesign Skill
                    </p>

                    <h1 className="text-2xl font-bold text-black/80 mt-4 leading-tight">
                      Modernizing Existing Products
                    </h1>
                  </div>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed mt-5">
                  I redesign outdated products with cleaner layouts, better UX
                  flow, modern UI patterns, and improved responsiveness.
                </p>
              </div>

              {/* Boxes */}

              <div className="space-y-3 mt-8">
                {/* Box 1 */}
                <div className="border border-gray-200 bg-gray-50 rounded-xl p-4 flex items-center justify-between gap-2">
                  <div>
                    <h1 className="text-lg font-bold text-black/80">
                      Existing Website
                    </h1>

                    <p className="text-xs text-gray-500 mt-1">
                      Old interface with outdated experience.
                    </p>
                  </div>

                  <a
                    href="https://www.kannuruniversity.ac.in/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit flex gap-2 items-center bg-black text-white px-4 py-2 rounded-sm text-xs tracking-wide cursor-pointer"
                  >
                    Visit <MdOutlineArrowOutward />
                  </a>
                </div>
                {/* Box 2 */}{" "}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <img src="/kannur.webp" alt="" />
                </div>
                <div className="border border-blue-100 bg-blue-50 rounded-xl p-4 flex items-center justify-between gap-2">
                  <div>
                    <h1 className="text-lg font-bold text-black/80">
                      Redesigned UI
                    </h1>

                    <p className="text-xs text-gray-500 mt-1">
                      Modern visuals with improved usability.
                    </p>
                  </div>

                  <a
                    href="https://kannur-university-website.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit flex gap-2 items-center bg-black text-white px-4 py-2 rounded-sm text-xs tracking-wide cursor-pointer"
                  >
                    Preview <MdOutlineArrowOutward />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Card */}
          </div>
          {/* ========================================= */}
          {/* 2nd Column */}
          {/* ========================================= */}
        </div>
      </div>
    </section>
  );
}
