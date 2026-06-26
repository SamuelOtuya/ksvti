import { Calendar, ImageIcon } from "lucide-react";
import { newsItems } from "../../data/news";

export default function NewsSection() {
  return (
    <section className="bg-white py-20 px-6 lg:px-16">
      <div className="text-center">
        <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[3px] mb-2">
          Latest News & Events
        </p>

        <h2 className="text-[#2d1b5e] text-3xl lg:text-4xl font-black uppercase">
          Stay Updated
        </h2>

        <div className="w-10 h-[3px] bg-[#f5a623] mx-auto mt-4 mb-12 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {newsItems.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-md overflow-hidden shadow-md hover:-translate-y-1 transition"
          >
            <div className="h-[190px] bg-gray-200 flex flex-col items-center justify-center text-gray-400 text-xs">
              <ImageIcon size={34} className="mb-2 opacity-50" />
              800 × 350
            </div>

            <div className="p-5">
              <h3 className="text-[#2d1b5e] hover:text-[#f5a623] text-base font-bold mb-3 leading-snug">
                <a href="/news">{item.title}</a>
              </h3>

              <p className="text-gray-600 text-sm leading-7 mb-4">
                {item.description}
              </p>

              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <Calendar size={14} className="text-[#f5a623]" />
                {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/news"
          className="inline-block bg-[#2d1b5e] hover:bg-[#3d2680] text-white px-9 py-4 rounded text-sm font-bold"
        >
          View All News
        </a>
      </div>
    </section>
  );
}
