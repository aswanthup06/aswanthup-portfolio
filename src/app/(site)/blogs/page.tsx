export default function Blogs() {
  const blogs = [
    {
      title: "Designing Scalable UI Systems",
      desc: "How to structure UI components for long-term scalability using modern frontend architecture.",
      date: "April 2026",
      tag: "UI/UX",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a"
    },
    {
      title: "React Performance Optimization",
      desc: "Best practices to improve performance in React apps using memoization and lazy loading.",
      date: "March 2026",
      tag: "Development",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166"
    },
    {
      title: "From Figma to Production",
      desc: "Bridging the gap between design and development efficiently.",
      date: "February 2026",
      tag: "Workflow",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166"
    },
     {
      title: "From Figma to Production",
      desc: "Bridging the gap between design and development efficiently.",
      date: "February 2026",
      tag: "Workflow",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166"
    }
  ];

  return (
    <div className="relative min-h-screen px-6 py-24">

      <div className="absolute inset-0 grid-bg z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Blogs
          </h1>
          <p className="text-gray-500 mt-3">
            Thoughts on UI, development, and design systems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group  overflow-hidden  transition duration-300"
            >

              <div className="overflow-hidden">
                <img
                  src={`${blog.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className=" mt-2">

                <span className="text-xs text-blue-500 font-medium ">
                  {blog.tag}
                </span>

                <h3 className="text-lg font-semibold text-gray-800 ">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {blog.desc}
                </p>

                <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
                  <span>{blog.date}</span>
                  <button className="text-blue-500 hover:underline">
                    Read →
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}