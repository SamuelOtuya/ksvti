import { useEffect, useState } from "react";
import PageHeader from "../components/common/PageHeader";
import NewsCard from "../components/news/NewsCard";
import { supabase } from "../services/supabase";

type NewsItem = {
  id: string;
  slug: string;
  title: string;
  category: string | null;
  event_date: string | null;
  image_url: string | null;
  excerpt: string | null;
  featured: boolean | null;
};

export default function News() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    setLoading(true);

    const { data, error } = await supabase
      .from("news_events")
      .select("id,slug,title,category,event_date,image_url,excerpt,featured")
      .eq("status", "published")
      .order("event_date", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setItems(data || []);
    }

    setLoading(false);
  }

  const featured = items.find((item) => item.featured);
  const latest = items.filter((item) => item.id !== featured?.id);

  return (
    <>
      <PageHeader
        title="News & Events"
        subtitle="Stay updated with announcements, events, and opportunities at KSVTI."
      />

      <section className="bg-white px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {loading ? (
            <div className="rounded-xl bg-[#f5f5f5] p-10 text-center text-gray-500">
              Loading news...
            </div>
          ) : items.length === 0 ? (
            <div className="rounded-xl bg-[#f5f5f5] p-10 text-center text-gray-500">
              No news or events available yet.
            </div>
          ) : (
            <>
              {featured && (
                <div className="mb-20">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[3px] text-[#f5a623]">
                    Featured Update
                  </p>

                  <div className="grid overflow-hidden rounded-xl bg-[#f5f5f5] shadow-md lg:grid-cols-2">
                    <img
                      src={featured.image_url || "/images/news-placeholder.jpg"}
                      alt={featured.title}
                      className="h-full min-h-[360px] w-full object-cover"
                    />

                    <div className="p-8 lg:p-12">
                      <span className="rounded-full bg-[#f5a623] px-3 py-1 text-xs font-bold text-white">
                        {featured.category || "News"}
                      </span>

                      <h2 className="mt-5 text-3xl font-black uppercase text-[#2d1b5e]">
                        {featured.title}
                      </h2>

                      <p className="mt-5 text-sm leading-8 text-gray-600">
                        {featured.excerpt ||
                          "Read the latest update from KSVTI."}
                      </p>

                      <a
                        href={`/news/${featured.slug}`}
                        className="mt-7 inline-block rounded bg-[#2d1b5e] px-8 py-4 font-bold text-white hover:bg-[#3d2680]"
                      >
                        Read Full Story
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[3px] text-[#f5a623]">
                  Latest Updates
                </p>

                <h2 className="mb-10 text-3xl font-black uppercase text-[#2d1b5e]">
                  News & Events
                </h2>

                {latest.length > 0 ? (
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {latest.map((item) => (
                      <NewsCard key={item.id} item={item} />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl bg-[#f5f5f5] p-10 text-center text-gray-500">
                    More updates will be posted soon.
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
