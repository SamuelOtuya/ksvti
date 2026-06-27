import { useEffect, useMemo, useState } from "react";
import PageHeader from "../../components/common/PageHeader";
import ProgrammeCard from "../../components/programmes/ProgrammeCard";
import ProgrammeFilters from "../../components/programmes/ProgrammeFilters";
import { supabase } from "../../services/supabase";

type Programme = {
  id: string;
  slug: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  intake: string[];
  study_mode: string;
  image_url: string;
  featured: boolean;
  short_description: string;
};

export default function Programmes() {
  const [programmes, setProgrammes] = useState<Programme[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetchProgrammes();
  }, []);

  async function fetchProgrammes() {
    setLoading(true);

    const { data, error } = await supabase
      .from("programmes")
      .select(
        "id,slug,title,category,level,duration,intake,study_mode,image_url,featured,short_description",
      )
      .eq("status", "published")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setProgrammes(data || []);
    }

    setLoading(false);
  }

  const categories = useMemo(() => {
    return ["All", ...new Set(programmes.map((item) => item.category))];
  }, [programmes]);

  const filteredProgrammes = programmes.filter((programme) => {
    const matchesSearch = programme.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || programme.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredProgrammes = filteredProgrammes.filter(
    (programme) => programme.featured,
  );

  return (
    <>
      <PageHeader
        title="Our Courses"
        subtitle="Explore practical programmes designed to prepare learners for employment, entrepreneurship, and lifelong success."
      />

      <section className="bg-white px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[3px] text-[#f5a623]">
              Academic Programmes
            </p>

            <h2 className="text-3xl font-black uppercase text-[#2d1b5e] lg:text-4xl">
              Find Your Programme
            </h2>
          </div>

          <ProgrammeFilters
            search={search}
            setSearch={setSearch}
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          {loading ? (
            <div className="mt-16 rounded-xl bg-[#f5f5f5] p-10 text-center text-gray-500">
              Loading programmes...
            </div>
          ) : (
            <>
              {featuredProgrammes.length > 0 && (
                <div className="mt-20">
                  <h3 className="mb-8 text-2xl font-black uppercase text-[#2d1b5e]">
                    Featured Programmes
                  </h3>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {featuredProgrammes.map((programme) => (
                      <ProgrammeCard key={programme.id} programme={programme} />
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-20">
                <h3 className="mb-2 text-2xl font-black uppercase text-[#2d1b5e]">
                  All Programmes
                </h3>

                <p className="mb-8 text-sm text-gray-500">
                  Showing {filteredProgrammes.length} programme
                  {filteredProgrammes.length !== 1 && "s"}
                </p>

                {filteredProgrammes.length > 0 ? (
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProgrammes.map((programme) => (
                      <ProgrammeCard key={programme.id} programme={programme} />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-lg bg-[#f5f5f5] p-10 text-center text-gray-600">
                    No programme found.
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
