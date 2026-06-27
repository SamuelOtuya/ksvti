import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

type NewsItem = {
  id: string;
  slug: string;
  title: string;
  category: string | null;
  event_date: string | null;
  image_url: string | null;
  excerpt: string | null;
};

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <img
        src={item.image_url || "/images/news-placeholder.jpg"}
        alt={item.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <span className="rounded-full bg-[#f5a623] px-3 py-1 text-xs font-bold text-white">
          {item.category || "News"}
        </span>

        <h3 className="mt-4 text-xl font-black text-[#2d1b5e]">{item.title}</h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
          <CalendarDays size={15} className="text-[#f5a623]" />
          {item.event_date || "Date TBA"}
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-600">
          {item.excerpt || "Read the latest update from KSVTI."}
        </p>

        <Link
          to={`/news/${item.slug}`}
          className="mt-5 inline-block font-bold text-[#2d1b5e] hover:text-[#f5a623]"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}
