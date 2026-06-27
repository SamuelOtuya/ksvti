import { Clock, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase";

type Programme = {
  id: string;
  slug: string;
  title: string;
  category: string;
  duration: string | null;
  image_url: string | null;
};

export default function CoursesSection() {
  const [programmes, setProgrammes] = useState<Programme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProgrammes();
  }, []);

  async function fetchFeaturedProgrammes() {
    setLoading(true);

    const { data, error } = await supabase
      .from("programmes")
      .select("id,slug,title,category,duration,image_url")
      .eq("status", "published")
      .eq("featured", true)
      .order("created_at", { ascending: false })
      .limit(6);

    if (error) {
      console.error(error);
    } else {
      setProgrammes(data || []);
    }

    setLoading(false);
  }

  return (
    <section className="bg-[#f5f5f5] py-20 px-6 lg:px-16">
      <div className="text-center">
        <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[3px] mb-2">
          Our Programmes
        </p>

        <h2 className="text-[#2d1b5e] text-3xl lg:text-4xl font-black uppercase">
          Featured Courses
        </h2>

        <div className="w-10 h-[3px] bg-[#f5a623] mx-auto mt-4 mb-12 rounded" />
      </div>

      {loading ? (
        <div className="text-center text-gray-500">Loading courses...</div>
      ) : programmes.length === 0 ? (
        <div className="mx-auto max-w-xl rounded-lg bg-white p-8 text-center text-gray-500 shadow">
          No featured courses available yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {programmes.map((programme) => (
            <Link
              key={programme.id}
              to={`/programmes/${programme.slug}`}
              className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition no-underline"
            >
              <div className="h-[140px] bg-gray-200">
                {programme.image_url ? (
                  <img
                    src={programme.image_url}
                    alt={programme.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center text-gray-400 text-xs">
                    <ImageIcon size={30} className="mb-2 opacity-50" />
                    400 × 300
                  </div>
                )}
              </div>

              <div className="p-4">
                <span className="mb-2 inline-block rounded-full bg-[#f5a623]/15 px-3 py-1 text-[10px] font-bold uppercase text-[#d4891a]">
                  {programme.category}
                </span>

                <h3 className="text-[#2d1b5e] text-xs font-black uppercase leading-snug mb-3 min-h-[32px]">
                  {programme.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
                  <Clock size={13} className="text-[#f5a623]" />
                  {programme.duration || "Duration TBA"}
                </div>

                <span className="text-[#2d1b5e] hover:text-[#f5a623] text-xs font-bold">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="text-center mt-12">
        <Link
          to="/programmes"
          className="inline-block bg-[#2d1b5e] hover:bg-[#3d2680] text-white px-9 py-4 rounded text-sm font-bold no-underline"
        >
          View All Courses
        </Link>
      </div>
    </section>
  );
}
