import { Clock, ImageIcon } from "lucide-react";
import { courses } from "../../data/courses";

export default function CoursesSection() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 lg:px-16">
      <div className="text-center">
        <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[3px] mb-2">
          Our Programs
        </p>

        <h2 className="text-[#2d1b5e] text-3xl lg:text-4xl font-black uppercase">
          Courses We Offer
        </h2>

        <div className="w-10 h-[3px] bg-[#f5a623] mx-auto mt-4 mb-12 rounded" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
        {courses.map((course) => (
          <div
            key={course.title}
            className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition cursor-pointer"
          >
            <div className="h-[140px] bg-gray-200 flex items-center justify-center overflow-hidden">
              {course.image ? (
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-400 text-xs">
                  <ImageIcon size={30} className="mb-2 opacity-50" />
                  400 × 300
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="text-[#2d1b5e] text-xs font-black uppercase leading-snug mb-3 min-h-[32px]">
                {course.title}
              </h3>

              <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
                <Clock size={13} className="text-[#f5a623]" />
                {course.duration}
              </div>

              <a
                href="#"
                className="text-[#2d1b5e] hover:text-[#f5a623] text-xs font-bold"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/courses"
          className="inline-block bg-[#2d1b5e] hover:bg-[#3d2680] text-white px-9 py-4 rounded text-sm font-bold"
        >
          View All Courses
        </a>
      </div>
    </section>
  );
}
