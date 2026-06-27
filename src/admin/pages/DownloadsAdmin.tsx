import { useEffect, useState } from "react";
import { Download, Plus, Trash2 } from "lucide-react";
import FileUploadField from "../components/FileUploadField";
import { supabase } from "../../services/supabase";

type DownloadItem = {
  id: string;
  title: string;
  description: string | null;
  file_url: string;
  file_type: string | null;
  file_size: string | null;
  category: string | null;
  status: string | null;
};

export default function DownloadsAdmin() {
  const [items, setItems] = useState<DownloadItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    file_url: "",
    file_type: "PDF",
    file_size: "",
    category: "General",
    status: "published",
  });

  useEffect(() => {
    fetchDownloads();
  }, []);

  async function fetchDownloads() {
    setLoading(true);

    const { data, error } = await supabase
      .from("downloads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) alert(error.message);
    else setItems(data || []);

    setLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.file_url) {
      alert("Please upload a file first.");
      return;
    }

    setSaving(true);

    const { error } = await supabase.from("downloads").insert(form);

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Download added successfully");

    setForm({
      title: "",
      description: "",
      file_url: "",
      file_type: "PDF",
      file_size: "",
      category: "General",
      status: "published",
    });

    fetchDownloads();
  }

  async function deleteDownload(id: string) {
    if (!window.confirm("Delete this download?")) return;

    const { error } = await supabase.from("downloads").delete().eq("id", id);

    if (error) alert(error.message);
    else fetchDownloads();
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-black text-[#2d1b5e]">Downloads</h1>
        <p className="text-sm text-gray-500">
          Manage forms, brochures, fee structures and documents.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mb-10 rounded-xl bg-white p-8 shadow-md"
      >
        <h2 className="mb-6 text-xl font-black text-[#2d1b5e]">Add Download</h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-5">
            <Input
              label="Title"
              value={form.title}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }
              required
            />

            <Textarea
              label="Description"
              value={form.description}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, description: e.target.value }))
              }
              rows={4}
            />

            <Input
              label="Category"
              value={form.category}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, category: e.target.value }))
              }
              placeholder="Admission, Fees, Academic"
            />

            <div>
              <label className="mb-2 block text-sm font-bold text-[#2d1b5e]">
                Status
              </label>
              <select
                value={form.status}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, status: e.target.value }))
                }
                className="w-full rounded border border-gray-200 p-4 outline-none focus:border-[#f5a623]"
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-8 py-4 font-bold text-white hover:bg-[#d4891a] disabled:opacity-60"
            >
              <Plus size={18} />
              {saving ? "Saving..." : "Add Download"}
            </button>
          </div>

          <FileUploadField
            value={form.file_url}
            folder="downloads"
            label="Document File"
            onChange={(url, file) =>
              setForm((prev) => ({
                ...prev,
                file_url: url,
                file_type: file?.name.split(".").pop()?.toUpperCase() || "FILE",
                file_size: file
                  ? `${(file.size / 1024 / 1024).toFixed(2)} MB`
                  : "",
              }))
            }
          />
        </div>
      </form>

      <div className="rounded-xl bg-white p-8 shadow-md">
        <h2 className="mb-6 text-xl font-black text-[#2d1b5e]">
          Uploaded Documents
        </h2>

        {loading ? (
          <p className="text-gray-500">Loading downloads...</p>
        ) : items.length === 0 ? (
          <p className="text-gray-500">No downloads uploaded yet.</p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-lg border p-5 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="font-black text-[#2d1b5e]">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="mt-1 text-xs text-gray-400">
                    {item.category} • {item.file_type} • {item.file_size}
                  </p>
                </div>

                <div className="flex gap-3">
                  <a
                    href={item.file_url}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded bg-[#2d1b5e] px-4 py-2 text-sm font-bold text-white"
                  >
                    <Download size={16} />
                    View
                  </a>

                  <button
                    onClick={() => deleteDownload(item.id)}
                    className="inline-flex items-center gap-2 rounded bg-red-50 px-4 py-2 text-sm font-bold text-red-600"
                  >
                    <Trash2 size={16} />
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
