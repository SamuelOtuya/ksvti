import { useEffect, useState } from "react";
import {
  BookOpen,
  Newspaper,
  Image,
  Download,
  FileText,
  Mail,
} from "lucide-react";
import { supabase } from "../../services/supabase";

type Stats = {
  programmes: number;
  news: number;
  gallery: number;
  downloads: number;
  applications: number;
  messages: number;
};

type Application = {
  id: string;
  full_name: string;
  programme: string | null;
  created_at: string;
};

type Message = {
  id: string;
  full_name: string;
  inquiry_type: string | null;
  created_at: string;
};

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    programmes: 0,
    news: 0,
    gallery: 0,
    downloads: 0,
    applications: 0,
    messages: 0,
  });

  const [recentApplications, setRecentApplications] = useState<Application[]>(
    [],
  );

  const [recentMessages, setRecentMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetchDashboard();
  }, []);

  async function fetchDashboard() {
    const [programmes, news, gallery, downloads, applications, messages] =
      await Promise.all([
        supabase.from("programmes").select("*", { count: "exact", head: true }),
        supabase
          .from("news_events")
          .select("*", { count: "exact", head: true }),
        supabase
          .from("gallery_images")
          .select("*", { count: "exact", head: true }),
        supabase.from("downloads").select("*", { count: "exact", head: true }),
        supabase
          .from("applications")
          .select("*", { count: "exact", head: true }),
        supabase
          .from("contact_messages")
          .select("*", { count: "exact", head: true }),
      ]);

    setStats({
      programmes: programmes.count || 0,
      news: news.count || 0,
      gallery: gallery.count || 0,
      downloads: downloads.count || 0,
      applications: applications.count || 0,
      messages: messages.count || 0,
    });

    const { data: apps } = await supabase
      .from("applications")
      .select("id,full_name,programme,created_at")
      .order("created_at", { ascending: false })
      .limit(5);

    setRecentApplications(apps || []);

    const { data: msgs } = await supabase
      .from("contact_messages")
      .select("id,full_name,inquiry_type,created_at")
      .order("created_at", { ascending: false })
      .limit(5);

    setRecentMessages(msgs || []);
  }

  const cards = [
    {
      title: "Programmes",
      value: stats.programmes,
      icon: BookOpen,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "News",
      value: stats.news,
      icon: Newspaper,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Gallery",
      value: stats.gallery,
      icon: Image,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Downloads",
      value: stats.downloads,
      icon: Download,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Applications",
      value: stats.applications,
      icon: FileText,
      color: "bg-cyan-50 text-cyan-600",
    },
    {
      title: "Messages",
      value: stats.messages,
      icon: Mail,
      color: "bg-red-50 text-red-600",
    },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black text-[#2d1b5e]">Dashboard</h1>

        <p className="mt-2 text-gray-500">
          Welcome back to Kahawa Sukari Vocational & Training Institute CMS.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div key={card.title} className="rounded-xl bg-white p-6 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{card.title}</p>

                  <h2 className="mt-3 text-4xl font-black text-[#2d1b5e]">
                    {card.value}
                  </h2>
                </div>

                <div className={`rounded-xl p-4 ${card.color}`}>
                  <Icon size={28} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-5 text-xl font-black text-[#2d1b5e]">
            Recent Applications
          </h2>

          {recentApplications.length === 0 ? (
            <p className="text-gray-500">No applications yet.</p>
          ) : (
            <div className="space-y-4">
              {recentApplications.map((app) => (
                <div key={app.id} className="border-b pb-3 last:border-0">
                  <p className="font-bold">{app.full_name}</p>
                  <p className="text-sm text-gray-500">
                    {app.programme || "Not specified"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-5 text-xl font-black text-[#2d1b5e]">
            Recent Messages
          </h2>

          {recentMessages.length === 0 ? (
            <p className="text-gray-500">No messages yet.</p>
          ) : (
            <div className="space-y-4">
              {recentMessages.map((msg) => (
                <div key={msg.id} className="border-b pb-3 last:border-0">
                  <p className="font-bold">{msg.full_name}</p>
                  <p className="text-sm text-gray-500">
                    {msg.inquiry_type || "General Inquiry"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
