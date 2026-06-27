import { Calendar, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase";

type NewsItem = {
  id: string;
  slug: string;
  title: string;
  category: string | null;
  event_date: string | null;
  image_url: string | null;
  excerpt: string | null;
};

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    setLoading(true);

    const { data, error } = await supabase
      .from("news_events")
      .select("id,slug,title,category,event_date,image_url,excerpt")
      .eq("status", "published")
      .order("event_date", { ascending: false })
      .limit(3);

    if (error) {
      console.error(error);
    } else {
      setNews(data || []);
    }

    setLoading(false);
  }

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

      {loading ? (
        <div className="text-center text-gray-500">Loading news...</div>
      ) : news.length === 0 ? (
        <div className="mx-auto max-w-xl rounded-lg bg-[#f5f5f5] p-8 text-center text-gray-500">
          No news or events available yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-md overflow-hidden shadow-md hover:-translate-y-1 transition"
            >
              <Link to={`/news/${item.slug}`} className="block no-underline">
                <div className="h-[190px] bg-gray-200">
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center text-gray-400 text-xs">
                      <ImageIcon size={34} className="mb-2 opacity-50" />
                      800 × 350
                    </div>
                  )}
                </div>
              </Link>

              <div className="p-5">
                <span className="mb-3 inline-block rounded-full bg-[#f5a623]/15 px-3 py-1 text-[10px] font-bold uppercase text-[#d4891a]">
                  {item.category || "News"}
                </span>

                <h3 className="text-[#2d1b5e] hover:text-[#f5a623] text-base font-bold mb-3 leading-snug">
                  <Link to={`/news/${item.slug}`} className="no-underline">
                    {item.title}
                  </Link>
                </h3>

                <p className="text-gray-600 text-sm leading-7 mb-4 line-clamp-3">
                  {item.excerpt || "Read the latest update from KSVTI."}
                </p>

                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Calendar size={14} className="text-[#f5a623]" />
                  {item.event_date || "Date TBA"}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-12">
        <Link
          to="/news"
          className="inline-block bg-[#2d1b5e] hover:bg-[#3d2680] text-white px-9 py-4 rounded text-sm font-bold no-underline"
        >
          View All News
        </Link>
      </div>
    </section>
  );
}
