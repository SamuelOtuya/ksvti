import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { supabase } from "../../services/supabase";
import DynamicListField from "../components/DynamicListField";
import ImageUploadField from "../components/ImageUploadField";

export default function AddProgramme() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "",
    level: "",
    duration: "",
    study_mode: "Full Time",
    image_url: "",
    short_description: "",
    overview: "",
    fees: "",
    status: "published",
    featured: false,
    intake: "",

    requirements: [] as string[],
    learning_outcomes: [] as string[],
    career_opportunities: [] as string[],
  });

  const [saving, setSaving] = useState(false);

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

  function generateSlug(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const payload = {
      title: form.title,
      slug: form.slug || generateSlug(form.title),
      category: form.category,
      level: form.level,
      duration: form.duration,
      study_mode: form.study_mode,
      image_url: form.image_url,
      short_description: form.short_description,
      overview: form.overview,
      fees: form.fees,
      status: form.status,
      featured: form.featured,
      intake: form.intake
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      requirements: form.requirements,

      learning_outcomes: form.learning_outcomes,

      career_opportunities: form.career_opportunities,
    };

    const { error } = await supabase.from("programmes").insert(payload);

    setSaving(false);

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    alert("Programme added successfully");
    navigate("/admin/programmes");
  }

  return (
    <div>
      <button
        onClick={() => navigate("/admin/programmes")}
        className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#2d1b5e]"
      >
        <ArrowLeft size={18} />
        Back to Programmes
      </button>

      <div className="mb-8">
        <h1 className="text-3xl font-black text-[#2d1b5e]">Add Programme</h1>
        <p className="text-sm text-gray-500">
          Create a new course or academic programme.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-xl bg-white p-8 shadow-md"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Input
            label="Programme Title"
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

          <Input
            label="Category"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="e.g. ICT, Hospitality, Beauty"
            required
          />

          <Input
            label="Level"
            name="level"
            value={form.level}
            onChange={handleChange}
            placeholder="e.g. Short Course, Certificate"
          />

          <Input
            label="Duration"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            placeholder="e.g. 2-3 Months"
          />

          <Input
            label="Study Mode"
            name="study_mode"
            value={form.study_mode}
            onChange={handleChange}
          />

          <div className="md:col-span-2">
            <ImageUploadField
              value={form.image_url}
              folder="programmes"
              onChange={(url) =>
                setForm((prev) => ({
                  ...prev,
                  image_url: url,
                }))
              }
            />
          </div>

          <Input
            label="Intakes"
            name="intake"
            value={form.intake}
            onChange={handleChange}
            placeholder="January, May, September"
          />

          <Input
            label="Fees"
            name="fees"
            value={form.fees}
            onChange={handleChange}
            placeholder="Optional"
          />

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
        </div>

        <div className="mt-6 flex items-center gap-3">
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

        <div className="mt-6 space-y-6">
          <Textarea
            label="Short Description"
            name="short_description"
            value={form.short_description}
            onChange={handleChange}
            rows={3}
          />

          <Textarea
            label="Overview"
            name="overview"
            value={form.overview}
            onChange={handleChange}
            rows={5}
          />

          <DynamicListField
            title="Requirements"
            items={form.requirements}
            onChange={(items) =>
              setForm((prev) => ({
                ...prev,
                requirements: items,
              }))
            }
          />

          <DynamicListField
            title="Learning Outcomes"
            items={form.learning_outcomes}
            onChange={(items) =>
              setForm((prev) => ({
                ...prev,
                learning_outcomes: items,
              }))
            }
          />

          <DynamicListField
            title="Career Opportunities"
            items={form.career_opportunities}
            onChange={(items) =>
              setForm((prev) => ({
                ...prev,
                career_opportunities: items,
              }))
            }
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-8 py-4 font-bold text-white hover:bg-[#d4891a] disabled:opacity-60"
        >
          <Save size={18} />
          {saving ? "Saving..." : "Save Programme"}
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
