import { useEffect, useState } from "react";
import { Mail, Phone, Trash2 } from "lucide-react";
import { supabase } from "../../services/supabase";

type Message = {
  id: string;
  full_name: string;
  email: string | null;
  phone: string | null;
  inquiry_type: string | null;
  message: string;
  status: string;
  created_at: string;
};

export default function MessagesAdmin() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    setLoading(true);

    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      alert(error.message);
    } else {
      setMessages(data || []);
    }

    setLoading(false);
  }

  async function updateStatus(id: string, status: string) {
    const { error } = await supabase
      .from("contact_messages")
      .update({ status })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchMessages();
  }

  async function deleteMessage(id: string) {
    if (!window.confirm("Delete this message?")) return;

    const { error } = await supabase
      .from("contact_messages")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchMessages();
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-black text-[#2d1b5e]">Contact Messages</h1>

        <p className="text-sm text-gray-500">
          Messages received from the website contact form.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow-md">
        {loading ? (
          <div className="p-8 text-center text-gray-500">
            Loading messages...
          </div>
        ) : messages.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No messages received yet.
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-[#2d1b5e] text-white">
              <tr>
                <th className="px-6 py-4 text-left">Sender</th>
                <th className="px-6 py-4 text-left">Inquiry</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {messages.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="px-6 py-5">
                    <p className="font-bold text-[#2d1b5e]">{item.full_name}</p>

                    {item.email && (
                      <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                        <Mail size={14} />
                        {item.email}
                      </p>
                    )}

                    {item.phone && (
                      <p className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                        <Phone size={14} />
                        {item.phone}
                      </p>
                    )}

                    <p className="mt-3 text-sm text-gray-600">{item.message}</p>
                  </td>

                  <td className="px-6 py-5">
                    {item.inquiry_type || "General Inquiry"}
                  </td>

                  <td className="px-6 py-5">
                    <select
                      value={item.status}
                      onChange={(e) => updateStatus(item.id, e.target.value)}
                      className="rounded border p-2"
                    >
                      <option value="new">New</option>
                      <option value="read">Read</option>
                      <option value="replied">Replied</option>
                    </select>
                  </td>

                  <td className="px-6 py-5 text-right">
                    <button
                      onClick={() => deleteMessage(item.id)}
                      className="rounded bg-red-50 p-2 text-red-600 hover:bg-red-100"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
