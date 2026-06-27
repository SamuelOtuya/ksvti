import { useEffect, useState } from "react";
import { Mail, Phone, Trash2 } from "lucide-react";
import { supabase } from "../../services/supabase";

type Application = {
  id: string;
  full_name: string;
  phone: string;
  email: string | null;
  programme: string | null;
  qualification: string | null;
  preferred_intake: string | null;
  message: string | null;
  status: string | null;
  created_at: string;
};

export default function ApplicationsAdmin() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  async function fetchApplications() {
    setLoading(true);

    const { data, error } = await supabase
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      alert(error.message);
    } else {
      setApplications(data || []);
    }

    setLoading(false);
  }

  async function updateStatus(id: string, status: string) {
    const { error } = await supabase
      .from("applications")
      .update({ status })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchApplications();
  }

  async function deleteApplication(id: string) {
    if (!window.confirm("Delete this application?")) return;

    const { error } = await supabase.from("applications").delete().eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchApplications();
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-black text-[#2d1b5e]">Applications</h1>
        <p className="text-sm text-gray-500">
          View and manage online student applications.
        </p>
      </div>

      <div className="rounded-xl bg-white shadow-md overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">
            Loading applications...
          </div>
        ) : applications.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No applications submitted yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#2d1b5e] text-white">
                <tr>
                  <th className="px-6 py-4">Applicant</th>
                  <th className="px-6 py-4">Programme</th>
                  <th className="px-6 py-4">Qualification</th>
                  <th className="px-6 py-4">Intake</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {applications.map((item) => (
                  <tr key={item.id} className="border-b last:border-b-0">
                    <td className="px-6 py-4">
                      <p className="font-bold text-[#2d1b5e]">
                        {item.full_name}
                      </p>

                      <div className="mt-2 space-y-1 text-xs text-gray-500">
                        <p className="flex items-center gap-2">
                          <Phone size={13} className="text-[#f5a623]" />
                          {item.phone}
                        </p>

                        {item.email && (
                          <p className="flex items-center gap-2">
                            <Mail size={13} className="text-[#f5a623]" />
                            {item.email}
                          </p>
                        )}
                      </div>

                      {item.message && (
                        <p className="mt-3 max-w-xs text-xs leading-5 text-gray-500">
                          {item.message}
                        </p>
                      )}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {item.programme || "-"}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {item.qualification || "-"}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {item.preferred_intake || "-"}
                    </td>

                    <td className="px-6 py-4">
                      <select
                        value={item.status || "new"}
                        onChange={(e) => updateStatus(item.id, e.target.value)}
                        className="rounded border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#f5a623]"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="admitted">Admitted</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end">
                        <button
                          onClick={() => deleteApplication(item.id)}
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
