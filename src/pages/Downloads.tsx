import { useEffect, useState } from "react";
import PageHeader from "../components/common/PageHeader";
import DownloadCard from "../components/downloads/DownloadCard";
import { supabase } from "../services/supabase";

type DownloadItem = {
  id: string;
  title: string;
  description: string | null;
  file_url: string;
  file_type: string | null;
  file_size: string | null;
  category: string | null;
};

export default function Downloads() {
  const [downloads, setDownloads] = useState<DownloadItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDownloads();
  }, []);

  async function fetchDownloads() {
    setLoading(true);

    const { data, error } = await supabase
      .from("downloads")
      .select("id,title,description,file_url,file_type,file_size,category")
      .eq("status", "published")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setDownloads(data || []);
    }

    setLoading(false);
  }

  return (
    <>
      <PageHeader
        title="Downloads"
        subtitle="Access important documents and resources from Kahawa Sukari Vocational & Training Institute."
      />

      <section className="bg-[#f5f5f5] px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[3px] text-[#f5a623]">
              Resources
            </p>

            <h2 className="text-4xl font-black uppercase text-[#2d1b5e]">
              Documents & Forms
            </h2>
          </div>

          {loading ? (
            <div className="rounded-xl bg-white p-10 text-center text-gray-500 shadow">
              Loading downloads...
            </div>
          ) : downloads.length === 0 ? (
            <div className="rounded-xl bg-white p-10 text-center text-gray-500 shadow">
              No downloads available yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {downloads.map((item) => (
                <DownloadCard
                  key={item.id}
                  item={{
                    title: item.title,
                    description: item.description || "",
                    file: item.file_url,
                    type: item.file_type || "FILE",
                    size: item.file_size || "",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
