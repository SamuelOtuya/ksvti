import { Link } from "react-router-dom";
import { CalendarDays, Clock, GraduationCap, Users } from "lucide-react";

type ProgrammeCardData = {
  id: string;
  slug: string;
  title: string;
  category: string;
  level?: string | null;
  duration?: string | null;
  intake?: string[] | null;
  study_mode?: string | null;
  image_url?: string | null;
  featured?: boolean | null;
  short_description?: string | null;
};

interface ProgrammeCardProps {
  programme: ProgrammeCardData;
}

export default function ProgrammeCard({ programme }: ProgrammeCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={programme.image_url || "/images/course-placeholder.jpg"}
          alt={programme.title}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-[#f5a623] px-3 py-1 text-xs font-bold text-white">
          {programme.category}
        </span>

        {programme.featured && (
          <span className="absolute right-4 top-4 rounded-full bg-[#2d1b5e] px-3 py-1 text-xs font-bold text-white">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl font-black text-[#2d1b5e]">
          {programme.title}
        </h3>

        <p className="mb-5 line-clamp-3 text-sm leading-7 text-gray-600">
          {programme.short_description ||
            "Explore this practical programme at KSVTI."}
        </p>

        <div className="mb-6 space-y-2 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <GraduationCap size={16} className="text-[#f5a623]" />
            {programme.level || "Programme"}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} className="text-[#f5a623]" />
            {programme.duration || "Duration TBA"}
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays size={16} className="text-[#f5a623]" />
            {programme.intake?.length
              ? programme.intake.join(" • ")
              : "Intake TBA"}
          </div>

          <div className="flex items-center gap-2">
            <Users size={16} className="text-[#f5a623]" />
            {programme.study_mode || "Full Time"}
          </div>
        </div>

        <div className="mt-auto flex gap-3">
          <Link
            to={`/programmes/${programme.slug}`}
            className="flex-1 rounded-lg bg-[#2d1b5e] py-3 text-center font-semibold text-white transition hover:bg-[#3d2680]"
          >
            View Details
          </Link>

          <Link
            to="/apply"
            className="rounded-lg border border-[#2d1b5e] px-5 py-3 font-semibold text-[#2d1b5e] transition hover:bg-[#2d1b5e] hover:text-white"
          >
            Apply
          </Link>
        </div>
      </div>
    </div>
  );
}
