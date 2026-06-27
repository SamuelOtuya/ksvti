import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import ImageUploadField from "../components/ImageUploadField";
import { supabase } from "../../services/supabase";

type GalleryImage = {
  id: string;
  title: string;
  category: string | null;
  image_url: string;
  featured: boolean | null;
  status: string | null;
};

export default function GalleryAdmin() {
  const [items, setItems] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: "",
    category: "Campus Life",
    image_url: "",
    description: "",
    featured: false,
    status: "published",
  });

  useEffect(() => {
    fetchGallery();
  }, []);

  async function fetchGallery() {
    setLoading(true);

    const { data, error } = await supabase
      .from("gallery_images")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      alert(error.message);
    } else {
      setItems(data || []);
    }

    setLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.image_url) {
      alert("Please upload an image first.");
      return;
    }

    setSaving(true);

    const { error } = await supabase.from("gallery_images").insert(form);

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Image added successfully");
    setForm({
      title: "",
      category: "Campus Life",
      image_url: "",
      description: "",
      featured: false,
      status: "published",
    });
    fetchGallery();
  }

  async function deleteImage(id: string) {
    if (!window.confirm("Delete this gallery image?")) return;

    const { error } = await supabase
      .from("gallery_images")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchGallery();
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-black text-[#2d1b5e]">Gallery</h1>
        <p className="text-sm text-gray-500">
          Upload and manage website gallery images.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mb-10 rounded-xl bg-white p-8 shadow-md"
      >
        <h2 className="mb-6 text-xl font-black text-[#2d1b5e]">
          Add Gallery Image
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-5">
            <Input
              label="Image Title"
              value={form.title}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }
              required
            />

            <div>
              <label className="mb-2 block text-sm font-bold text-[#2d1b5e]">
                Category
              </label>
              <select
                value={form.category}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, category: e.target.value }))
                }
                className="w-full rounded border border-gray-200 p-4 outline-none focus:border-[#f5a623]"
              >
                <option>Campus Life</option>
                <option>Practical Training</option>
                <option>Graduation</option>
                <option>Events</option>
                <option>Workshops</option>
                <option>Student Activities</option>
              </select>
            </div>

            <Textarea
              label="Description"
              value={form.description}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, description: e.target.value }))
              }
              rows={4}
            />

            <div className="flex items-center gap-3">
              <input
                id="featured"
                type="checkbox"
                checked={form.featured}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    featured: e.target.checked,
                  }))
                }
              />
              <label
                htmlFor="featured"
                className="text-sm font-bold text-[#2d1b5e]"
              >
                Mark as Featured
              </label>
            </div>

            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-8 py-4 font-bold text-white hover:bg-[#d4891a] disabled:opacity-60"
            >
              <Plus size={18} />
              {saving ? "Saving..." : "Add Image"}
            </button>
          </div>

          <ImageUploadField
            label="Gallery Image"
            value={form.image_url}
            folder="gallery"
            onChange={(url) => setForm((prev) => ({ ...prev, image_url: url }))}
          />
        </div>
      </form>

      <div className="rounded-xl bg-white p-8 shadow-md">
        <h2 className="mb-6 text-xl font-black text-[#2d1b5e]">
          Uploaded Images
        </h2>

        {loading ? (
          <p className="text-gray-500">Loading gallery...</p>
        ) : items.length === 0 ? (
          <p className="text-gray-500">No images uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-lg border">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="h-44 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="font-bold text-[#2d1b5e]">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.category}</p>

                  <button
                    onClick={() => deleteImage(item.id)}
                    className="mt-4 inline-flex items-center gap-2 rounded bg-red-50 px-4 py-2 text-sm font-bold text-red-600 hover:bg-red-100"
                  >
                    <Trash2 size={15} />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Input({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[#2d1b5e]">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded border border-gray-200 p-4 outline-none focus:border-[#f5a623]"
      />
    </div>
  );
}

function Textarea({
  label,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[#2d1b5e]">
        {label}
      </label>
      <textarea
        {...props}
        className="w-full rounded border border-gray-200 p-4 outline-none focus:border-[#f5a623]"
      />
    </div>
  );
}
