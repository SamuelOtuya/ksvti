import { useEffect, useState } from "react";
import { Edit, Plus, Trash2 } from "lucide-react";
import { supabase } from "../../services/supabase";
import { Link } from "react-router-dom";

type Programme = {
  id: string;
  title: string;
  slug: string;
  category: string;
  level: string | null;
  duration: string | null;
  status: string | null;
  featured: boolean | null;
  created_at: string;
};

export default function ProgrammesAdmin() {
  const [programmes, setProgrammes] = useState<Programme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProgrammes();
  }, []);

  async function deleteProgramme(id: string) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this programme? This action cannot be undone.",
    );

    if (!confirmDelete) return;

    const { error } = await supabase.from("programmes").delete().eq("id", id);

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    alert("Programme deleted successfully");
    fetchProgrammes();
  }

  async function fetchProgrammes() {
    setLoading(true);

    const { data, error } = await supabase
      .from("programmes")
      .select(
        "id,title,slug,category,level,duration,status,featured,created_at",
      )
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      alert("Failed to fetch programmes");
    } else {
      setProgrammes(data || []);
    }

    setLoading(false);
  }

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-black text-[#2d1b5e]">Programmes</h1>
          <p className="text-sm text-gray-500">
            Manage courses and academic programmes.
          </p>
        </div>

        <Link
          to="/admin/programmes/add"
          className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-5 py-3 font-bold text-white hover:bg-[#d4891a]"
        >
          <Plus size={18} />
          Add Programme
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow-md">
        {loading ? (
          <div className="p-8 text-center text-gray-500">
            Loading programmes...
          </div>
        ) : programmes.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No programmes found. Add your first programme.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#2d1b5e] text-white">
                <tr>
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Level</th>
                  <th className="px-6 py-4">Duration</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Featured</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {programmes.map((programme) => (
                  <tr key={programme.id} className="border-b last:border-b-0">
                    <td className="px-6 py-4 font-bold text-[#2d1b5e]">
                      {programme.title}
                      <div className="text-xs font-normal text-gray-400">
                        /programmes/{programme.slug}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {programme.category}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {programme.level || "-"}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {programme.duration || "-"}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          programme.status === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {programme.status || "draft"}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      {programme.featured ? (
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
                          to={`/admin/programmes/edit/${programme.id}`}
                          className="rounded bg-blue-50 p-2 text-blue-600 hover:bg-blue-100"
                        >
                          <Edit size={16} />
                        </Link>

                        <button
                          onClick={() => deleteProgramme(programme.id)}
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
