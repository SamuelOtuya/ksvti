import { Link, useParams } from "react-router-dom";
import {
  CalendarDays,
  CheckCircle,
  Clock,
  GraduationCap,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase";

type Programme = {
  id: string;
  slug: string;
  title: string;
  category: string;
  level: string | null;
  duration: string | null;
  intake: string[] | null;
  study_mode: string | null;
  image_url: string | null;
  featured: boolean | null;
  short_description: string | null;
  overview: string | null;
  requirements: string[] | null;
  learning_outcomes: string[] | null;
  career_opportunities: string[] | null;
  fees: string | null;
  status: string | null;
};

export default function ProgrammeDetails() {
  const { slug } = useParams();

  const [programme, setProgramme] = useState<Programme | null>(null);
  const [relatedProgrammes, setRelatedProgrammes] = useState<Programme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProgramme();
  }, [slug]);

  async function fetchProgramme() {
    if (!slug) return;

    setLoading(true);

    const { data, error } = await supabase
      .from("programmes")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .single();

    if (error || !data) {
      console.error(error);
      setProgramme(null);
      setLoading(false);
      return;
    }

    setProgramme(data);

    const { data: related } = await supabase
      .from("programmes")
      .select("*")
      .eq("status", "published")
      .eq("category", data.category)
      .neq("id", data.id)
      .limit(3);

    setRelatedProgrammes(related || []);
    setLoading(false);
  }

  if (loading) {
    return (
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-xl rounded-xl bg-[#f5f5f5] p-10 text-gray-500">
          Loading programme...
        </div>
      </section>
    );
  }

  if (!programme) {
    return (
      <section className="px-6 py-24 text-center">
        <h1 className="text-4xl font-black text-[#2d1b5e]">
          Programme Not Found
        </h1>

        <Link
          to="/programmes"
          className="mt-6 inline-block rounded bg-[#f5a623] px-8 py-4 font-bold text-white"
        >
          Back to Programmes
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="relative min-h-[460px] overflow-hidden bg-[#2d1b5e] px-6 py-24 lg:px-16">
        <img
          src={programme.image_url || "/images/course-placeholder.jpg"}
          alt={programme.title}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#2d1b5e] via-[#2d1b5e]/90 to-[#2d1b5e]/50" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#f5a623]">
            {programme.category}
          </p>

          <h1 className="max-w-4xl text-4xl font-black uppercase leading-tight text-white lg:text-6xl">
            {programme.title}
          </h1>

          <p className="mt-5 max-w-2xl text-white/75">
            {programme.short_description ||
              "Explore this practical training programme at KSVTI."}
          </p>

          <Link
            to="/apply"
            className="mt-8 inline-block rounded bg-[#f5a623] px-9 py-4 font-bold text-white hover:bg-[#d4891a]"
          >
            Apply Now
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-4">
          <QuickFact
            icon={<GraduationCap />}
            label="Level"
            value={programme.level || "Programme"}
          />
          <QuickFact
            icon={<Clock />}
            label="Duration"
            value={programme.duration || "Duration TBA"}
          />
          <QuickFact
            icon={<CalendarDays />}
            label="Intake"
            value={
              programme.intake?.length
                ? programme.intake.join(", ")
                : "Intake TBA"
            }
          />
          <QuickFact
            icon={<Users />}
            label="Mode"
            value={programme.study_mode || "Full Time"}
          />
        </div>
      </section>

      <section className="bg-[#f5f5f5] px-6 py-20 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <ContentBlock title="Programme Overview">
              <p>
                {programme.overview ||
                  "More information about this programme will be updated soon."}
              </p>
            </ContentBlock>

            {programme.requirements?.length ? (
              <ContentBlock title="Entry Requirements">
                <List items={programme.requirements} />
              </ContentBlock>
            ) : null}

            {programme.learning_outcomes?.length ? (
              <ContentBlock title="What You Will Learn">
                <List items={programme.learning_outcomes} />
              </ContentBlock>
            ) : null}

            {programme.career_opportunities?.length ? (
              <ContentBlock title="Career Opportunities">
                <List items={programme.career_opportunities} />
              </ContentBlock>
            ) : null}
          </div>

          <aside className="h-fit rounded-lg bg-[#2d1b5e] p-8 text-white">
            <h3 className="mb-4 text-2xl font-black uppercase">Need Help?</h3>

            <p className="mb-6 text-sm leading-7 text-white/70">
              Talk to our admissions office for guidance on entry requirements,
              fees, and application steps.
            </p>

            {programme.fees && (
              <div className="mb-6 rounded-lg bg-white/10 p-4">
                <p className="text-xs uppercase text-white/50">Fees</p>
                <h4 className="font-bold text-[#f5a623]">{programme.fees}</h4>
              </div>
            )}

            <Link
              to="/contact"
              className="block rounded bg-[#f5a623] px-6 py-4 text-center font-bold text-white"
            >
              Contact Admissions
            </Link>
          </aside>
        </div>
      </section>

      {relatedProgrammes.length > 0 && (
        <section className="bg-white px-6 py-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-3xl font-black uppercase text-[#2d1b5e]">
              Related Programmes
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {relatedProgrammes.map((item) => (
                <Link
                  key={item.id}
                  to={`/programmes/${item.slug}`}
                  className="rounded-lg bg-[#f5f5f5] p-6 no-underline transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="mb-2 font-black uppercase text-[#2d1b5e]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.duration || "Duration TBA"}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function QuickFact({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg bg-[#f5f5f5] p-6">
      <div className="mb-3 text-[#f5a623]">{icon}</div>
      <p className="text-xs font-bold uppercase text-gray-500">{label}</p>
      <h3 className="mt-1 font-black text-[#2d1b5e]">{value}</h3>
    </div>
  );
}

function ContentBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg bg-white p-8 shadow-md">
      <h2 className="mb-5 text-2xl font-black uppercase text-[#2d1b5e]">
        {title}
      </h2>

      <div className="text-sm leading-8 text-gray-600">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <CheckCircle
            className="mt-1 flex-shrink-0 text-[#f5a623]"
            size={18}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
