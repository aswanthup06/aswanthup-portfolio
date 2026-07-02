interface Testimonial {
  avatar: string;
  quote: string;
  name: string;
  role: string;
}

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col h-full hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover"
        />
      </div>

      <p className="text-sm text-gray-700 leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="mt-auto pt-6">
        <div className="w-full h-px bg-gray-100 mb-4" />

        <p className="text-sm font-semibold text-gray-900">
          {testimonial.name}
        </p>

        <p className="text-xs text-gray-500 mt-0.5">
          {testimonial.role}
        </p>
      </div>
    </div>
  );
}