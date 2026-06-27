import { ArrowLeft, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImageUploadField from "../components/ImageUploadField";
import { supabase } from "../../services/supabase";

export default function EditNews() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "News",
    image_url: "",
    excerpt: "",
    content: "",
    featured: false,
    status: "published",
    event_date: "",
  });

  useEffect(() => {
    fetchNews();
  }, [id]);

  async function fetchNews() {
    if (!id) return;

    const { data, error } = await supabase
      .from("news_events")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      alert("News/Event not found");
      navigate("/admin/news");
      return;
    }

    setForm({
      title: data.title || "",
      slug: data.slug || "",
      category: data.category || "News",
      image_url: data.image_url || "",
      excerpt: data.excerpt || "",
      content: data.content || "",
      featured: Boolean(data.featured),
      status: data.status || "published",
      event_date: data.event_date || "",
    });

    setLoading(false);
  }

  function generateSlug(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!id) return;

    setSaving(true);

    const { error } = await supabase
      .from("news_events")
      .update({
        title: form.title,
        slug: form.slug || generateSlug(form.title),
        category: form.category,
        image_url: form.image_url,
        excerpt: form.excerpt,
        content: form.content,
        featured: form.featured,
        status: form.status,
        event_date: form.event_date || null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("News/Event updated successfully");
    navigate("/admin/news");
  }

  if (loading) {
    return (
      <div className="rounded-xl bg-white p-8 text-center text-gray-500 shadow-md">
        Loading news/event...
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => navigate("/admin/news")}
        className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#2d1b5e]"
      >
        <ArrowLeft size={18} />
        Back to News
      </button>

      <div className="mb-8">
        <h1 className="text-3xl font-black text-[#2d1b5e]">Edit News/Event</h1>
        <p className="text-sm text-gray-500">
          Update announcements, events, and latest school updates.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-xl font-black text-[#2d1b5e]">
            Basic Information
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Input
              label="Title"
              name="title"
              value={form.title}
              onChange={(e) => {
                handleChange(e);
                setForm((prev) => ({
                  ...prev,
                  slug: generateSlug(e.target.value),
                }));
              }}
              required
            />

            <Input
              label="Slug"
              name="slug"
              value={form.slug}
              onChange={handleChange}
              required
            />

            <div>
              <label className="mb-2 block text-sm font-bold text-[#2d1b5e]">
                Category
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded border border-gray-200 p-4 outline-none focus:border-[#f5a623]"
              >
                <option value="News">News</option>
                <option value="Event">Event</option>
                <option value="Announcement">Announcement</option>
              </select>
            </div>

            <Input
              label="Event/Publish Date"
              type="date"
              name="event_date"
              value={form.event_date}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-md">
          <ImageUploadField
            label="News Image"
            value={form.image_url}
            folder="news"
            onChange={(url) =>
              setForm((prev) => ({
                ...prev,
                image_url: url,
              }))
            }
          />
        </div>

        <div className="rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-xl font-black text-[#2d1b5e]">Content</h2>

          <div className="space-y-6">
            <Textarea
              label="Excerpt"
              name="excerpt"
              value={form.excerpt}
              onChange={handleChange}
              rows={3}
            />

            <Textarea
              label="Full Content"
              name="content"
              value={form.content}
              onChange={handleChange}
              rows={10}
            />
          </div>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-xl font-black text-[#2d1b5e]">
            Publishing Settings
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-bold text-[#2d1b5e]">
                Status
              </label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full rounded border border-gray-200 p-4 outline-none focus:border-[#f5a623]"
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>

            <div className="flex items-center gap-3 pt-8">
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
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-8 py-4 font-bold text-white hover:bg-[#d4891a] disabled:opacity-60"
        >
          <Save size={18} />
          {saving ? "Updating..." : "Update News/Event"}
        </button>
      </form>
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
