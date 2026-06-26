import { GraduationCap, BookOpen, Smile, Award } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "500+",
    label: "Graduates",
  },
  {
    icon: BookOpen,
    value: "20+",
    label: "Courses Offered",
  },
  {
    icon: Smile,
    value: "95%",
    label: "Student Satisfaction",
  },
  {
    icon: Award,
    value: "TVET",
    label: "Registered",
  },
];

export default function StatsBar() {
  return (
    <div className="relative z-20 mx-auto max-w-[1400px] -mt-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white shadow-xl rounded-b-lg overflow-hidden">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={index}
              className={`flex items-center gap-4 p-8 ${
                index !== stats.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-gray-200"
                  : ""
              }`}
            >
              <Icon size={38} className="text-[#2d1b5e] flex-shrink-0" />

              <div>
                <h3 className="text-3xl font-extrabold text-[#2d1b5e]">
                  {stat.value}
                </h3>

                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
