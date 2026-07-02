import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaBehance, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Aswanth UP"
      className="w-full flex flex-col items-center"
    >
      {/* Header */}
      <div className=" md:flex  items-end justify-between w-full max-w-6xl">
        <div>
          <h2 className="font-bold text-sm md:text-base text-gray-900">
            About Me
          </h2>

          <p className="text-3xl text-slate-500/60">
            Designing Seamless User Experiences
          </p>
        </div>

        <Link
          href="/about"
          className="
          md:mt-0 mt-3
            bg-gradient-to-b
            from-blue-400
            to-blue-600
            rounded-md
            text-white
            h-10
            w-36
            font-medium
            text-[14px]
            flex
            items-center
            gap-2
            justify-center
            shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
            hover:from-blue-500
            hover:to-blue-700
            active:translate-y-px
            transition-all
            duration-200
          "
        >
          Learn More
          <MdOutlineArrowOutward />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[1fr_auto_1fr] gap-5 w-full max-w-6xl mt-12">
        {/* Box 1 */}
        <article className="bg-white lg:row-span-3 border border-gray-200 rounded-xl p-6 hover:shadow-xl flex flex-col justify-between duration-500">
          <div>
            <div className="w-20 h-20 border border-gray-200 rounded-full flex items-center justify-center mb-4 overflow-hidden">
              <Image
                src="/me2.png"
                alt="Aswanth UP UI Developer"
                width={100}
                height={100}
                className="w-full h-full object-cover scale-110"
                priority
              />
            </div>

            <h3 className="text-gray-900  font-bold text-xl leading-tight mb-2">
              Aswanth UP
            </h3>

            <p className="text-blue-600 text-sm font-medium mb-4 ">
              UI Developer • React Frontend
            </p>

            <p className="text-gray-500 text-sm leading-relaxed ">
              UI Developer with 3+ years of experience building scalable,
              responsive, and pixel-perfect interfaces using React, Next.js,
              Tailwind CSS, and Figma Dev Mode.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-sm bg-gray-100 text-xs text-gray-700">
                React
              </span>

              <span className="px-3 py-1 rounded-sm bg-gray-100 text-xs text-gray-700">
                Next.js
              </span>

              <span className="px-3 py-1 rounded-sm bg-gray-100 text-xs text-gray-700">
                Tailwind
              </span>

              <span className="px-3 py-1 rounded-sm bg-gray-100 text-xs text-gray-700">
                Figma
              </span>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 mt-6">
            <p className="text-sm text-gray-400 group-hover:text-white/80">Based in Kerala, India</p>

            <p className="text-sm text-gray-900 font-medium mt-1 group-hover:text-white/80">
              Open to Remote Opportunities
            </p>
          </div>
        </article>

        {/* Box 2 */}
        <article className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl flex flex-col justify-between lg:row-span-2 h-full">
          <div>

            <div className="flex items-center gap-2"><h3 className="text-8xl font-black text-gray-900 tracking-tighter">
              600
            </h3>
            <h3 className="text-5xl font-black text-gray-900 tracking-tighter h-fit"><FaPlus /></h3>
            </div>
            

            <p className="text-gray-900 font-bold text-xl mt-2">
              Screens Developed
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">
                Responsive UI Systems
              </span>

              <span className="text-gray-900 font-semibold">100%</span>
            </div>

            <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
              <div className="w-full h-full bg-black rounded-full" />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Built scalable dashboards, SaaS platforms, healthcare interfaces,
              and reusable component systems across web and mobile applications.
            </p>
          </div>
        </article>

        {/* Box 3 */}
        <article className="bg-white border rounded-xl border-gray-200 hover:shadow-xl p-6 flex items-center gap-3 h-fit">
          <div className="min-w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
            ⚡
          </div>

          <div>
            <p className="text-gray-900 font-bold text-lg">Fast Delivery</p>

            <p className="text-gray-400 text-sm leading-relaxed">
              Rapid Figma-to-code workflow
            </p>
          </div>
        </article>

        {/* Box 4 */}
        <article className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl h-full">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-900 font-bold text-lg">
                Figma to Code
              </p>

              <p className="text-gray-400 text-sm">
                Design Accuracy
              </p>
            </div>

            <div className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold">
              Verified
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-6xl font-black text-gray-900 tracking-tight">
              99%
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Pixel-perfect implementation using Figma Dev Mode, Auto Layout,
              and scalable component systems.
            </p>
          </div>
        </article>

        {/* Box 5 */}
        <article className="bg-white rounded-xl px-6 py-5 border border-gray-200 hover:shadow-xl flex items-center justify-between lg:col-span-2">
          <div>
            <p className="text-gray-900 font-bold text-lg">
              Follow Me
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Let’s connect and build something amazing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/aswanthup/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="
                h-8
                w-8
                rounded-full
                bg-gray-100
                flex
                items-center
                justify-center
                text-gray-600
                hover:bg-blue-500
                hover:text-white
                transition
              "
            >
              <FaLinkedinIn size={14} />
            </a>

            <a
              href="https://wa.me/917559068970"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Contact"
              className="
                h-8
                w-8
                rounded-full
                bg-gray-100
                flex
                items-center
                justify-center
                text-gray-600
                hover:bg-green-500
                hover:text-white
                transition
              "
            >
              <IoLogoWhatsapp size={14} />
            </a>

            <a
              href="https://www.behance.net/ASWANTHUP"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance Portfolio"
              className="
                h-8
                w-8
                rounded-full
                bg-gray-100
                flex
                items-center
                justify-center
                text-gray-600
                hover:bg-blue-500
                hover:text-white
                transition
              "
            >
              <FaBehance size={14} />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}