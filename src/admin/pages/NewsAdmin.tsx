import { useEffect, useState } from "react";
import { Edit, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "../../services/supabase";

type NewsEvent = {
  id: string;
  title: string;
  slug: string;
  category: string | null;
  status: string | null;
  featured: boolean | null;
  event_date: string | null;
  created_at: string;
};

export default function NewsAdmin() {
  const [items, setItems] = useState<NewsEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    setLoading(true);

    const { data, error } = await supabase
      .from("news_events")
      .select("id,title,slug,category,status,featured,event_date,created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      alert(error.message);
    } else {
      setItems(data || []);
    }

    setLoading(false);
  }

  async function deleteNews(id: string) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this news/event?",
    );

    if (!confirmDelete) return;

    const { error } = await supabase.from("news_events").delete().eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Deleted successfully");
    fetchNews();
  }

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-black text-[#2d1b5e]">News & Events</h1>
          <p className="text-sm text-gray-500">
            Manage announcements, events and school news.
          </p>
        </div>

        <Link
          to="/admin/news/add"
          className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-5 py-3 font-bold text-white hover:bg-[#d4891a]"
        >
          <Plus size={18} />
          Add News/Event
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow-md">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading news...</div>
        ) : items.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No news or events found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#2d1b5e] text-white">
                <tr>
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Featured</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b last:border-b-0">
                    <td className="px-6 py-4 font-bold text-[#2d1b5e]">
                      {item.title}
                      <div className="text-xs font-normal text-gray-400">
                        /news/{item.slug}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {item.category || "News"}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {item.event_date || "-"}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          item.status === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {item.status || "draft"}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      {item.featured ? (
                        <span className="rounded-full bg-[#f5a623]/20 px-3 py-1 text-xs font-bold text-[#d4891a]">
                          Featured
                        </span>
                      ) : (
                        <span className="text-gray-400">No</span>
                      )}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <Link
                          to={`/admin/news/edit/${item.id}`}
                          className="rounded bg-blue-50 p-2 text-blue-600 hover:bg-blue-100"
                        >
                          <Edit size={16} />
                        </Link>

                        <button
                          onClick={() => deleteNews(item.id)}
                          className="rounded bg-red-50 p-2 text-red-600 hover:bg-red-100"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
