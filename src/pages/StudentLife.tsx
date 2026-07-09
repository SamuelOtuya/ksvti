import PageHeader from "../components/common/PageHeader";
import { Camera, Trophy, Users, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import ImageGallery from "../components/common/ImageGallery";
import { supabase } from "../services/supabase";
import studentLife from "../assets/images/studentlife.jpeg";

const activities = [
  {
    icon: Wrench,
    title: "Practical Training",
    description:
      "Students spend significant time in workshops and laboratories gaining practical skills.",
  },
  {
    icon: Users,
    title: "Student Clubs",
    description:
      "Join student-led clubs that promote teamwork, leadership, and innovation.",
  },
  {
    icon: Trophy,
    title: "Competitions",
    description:
      "Participate in vocational skills competitions, exhibitions, and innovation challenges.",
  },
  {
    icon: Camera,
    title: "Campus Events",
    description:
      "Enjoy sports, career fairs, graduation ceremonies, and community outreach programs.",
  },
];

export default function StudentLife() {
  const [gallery, setGallery] = useState<
    { id: string; title: string; image_url: string }[]
  >([]);

  useEffect(() => {
    fetchStudentLifeGallery();
  }, []);

  async function fetchStudentLifeGallery() {
    const { data, error } = await supabase
      .from("gallery_images")
      .select("id,title,image_url")
      .eq("status", "published")
      .in("category", [
        "Student Activities",
        "Campus Life",
        "Practical Training",
      ])
      .order("created_at", { ascending: false })
      .limit(6);

    if (!error) {
      setGallery(data || []);
    }
  }

  return (
    <>
      <PageHeader
        title="Student Life"
        subtitle="Learning goes beyond the classroom through practical experiences, collaboration, and personal growth."
      />

      {/* Introduction */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="h-[380px] rounded-lg bg-gray-200 flex items-center justify-center">
            <img
              src={studentLife}
              alt="KSVTI campus building"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-[#f5a623] uppercase tracking-[3px] text-xs font-bold mb-3">
              Campus Experience
            </p>

            <h2 className="text-4xl font-black text-[#2d1b5e] uppercase mb-5">
              Learn, Grow & Thrive
            </h2>

            <p className="text-gray-600 leading-8">
              At KSVTI, student life is built around practical learning,
              teamwork, innovation, and personal development. Every learner
              gains real-world experience while enjoying a supportive academic
              environment.
            </p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="bg-[#f5f5f5] py-20 px-6 lg:px-16">
        <div className="text-center mb-14">
          <p className="text-[#f5a623] uppercase tracking-[3px] text-xs font-bold">
            Student Activities
          </p>

          <h2 className="text-4xl font-black text-[#2d1b5e] uppercase mt-3">
            Beyond the Classroom
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-lg shadow-md p-8 text-center hover:-translate-y-2 transition"
              >
                <div className="w-16 h-16 rounded-full bg-[#2d1b5e] text-[#f5a623] mx-auto flex items-center justify-center mb-5">
                  <Icon size={28} />
                </div>

                <h3 className="font-black text-[#2d1b5e] uppercase mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-20 px-6 lg:px-16">
        <div className="text-center mb-14">
          <p className="text-[#f5a623] uppercase tracking-[3px] text-xs font-bold">
            Gallery
          </p>

          <h2 className="text-4xl font-black text-[#2d1b5e] uppercase mt-3">
            Life at KSVTI
          </h2>
        </div>

        {gallery.length > 0 ? (
          <ImageGallery
            images={gallery.map((item) => ({
              src: item.image_url,
              title: item.title,
            }))}
            columns={3}
          />
        ) : (
          <div className="rounded-xl bg-[#f5f5f5] p-10 text-center text-gray-500">
            Student life photos will be added soon.
          </div>
        )}

        <div className="mt-10 text-center">
          <a
            href="/gallery"
            className="inline-block rounded bg-[#2d1b5e] px-8 py-4 font-bold text-white hover:bg-[#3d2680]"
          >
            View Full Gallery
          </a>
        </div>
      </section>
    </>
  );
}
