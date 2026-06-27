import { useEffect, useState } from "react";
import PageHeader from "../components/common/PageHeader";
import ImageGallery from "../components/common/ImageGallery";
import { supabase } from "../services/supabase";

type GalleryImage = {
  id: string;
  title: string;
  category: string | null;
  image_url: string;
  description: string | null;
};

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGallery();
  }, []);

  async function fetchGallery() {
    setLoading(true);

    const { data, error } = await supabase
      .from("gallery_images")
      .select("id,title,category,image_url,description")
      .eq("status", "published")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setImages(data || []);
    }

    setLoading(false);
  }

  const galleryImages = images.map((item) => ({
    src: item.image_url,
    title: item.title,
  }));

  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Explore moments from training sessions, workshops, student activities, and campus life."
      />

      <section className="bg-white px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[3px] text-[#f5a623]">
              Our Moments
            </p>

            <h2 className="text-3xl font-black uppercase text-[#2d1b5e] lg:text-4xl">
              Life at KSVTI
            </h2>

            <div className="mx-auto mt-4 h-[3px] w-10 rounded bg-[#f5a623]" />
          </div>

          {loading ? (
            <div className="rounded-xl bg-[#f5f5f5] p-10 text-center text-gray-500">
              Loading gallery...
            </div>
          ) : galleryImages.length === 0 ? (
            <div className="rounded-xl bg-[#f5f5f5] p-10 text-center text-gray-500">
              No gallery images available yet.
            </div>
          ) : (
            <ImageGallery images={galleryImages} columns={3} />
          )}
        </div>
      </section>
    </>
  );
}
