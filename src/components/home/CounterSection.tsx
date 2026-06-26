import { Activity, Award, Users } from "lucide-react";

const counters = [
  {
    icon: Users,
    value: "500+",
    label: "Graduates",
  },
  {
    icon: Users,
    value: "150+",
    label: "Industry Partners",
  },
  {
    icon: Activity,
    value: "95%",
    label: "Employment Rate",
  },
  {
    icon: Award,
    value: "10+",
    label: "Years of Excellence",
  },
];

export default function CounterSection() {
  return (
    <section className="bg-[#2d1b5e] p-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {counters.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className={`flex items-center gap-4 px-8 py-10 ${
                index !== counters.length - 1
                  ? "border-b md:border-r border-white/10"
                  : ""
              }`}
            >
              <Icon size={42} className="text-[#f5a623] flex-shrink-0" />

              <div>
                <h3 className="text-white text-4xl font-black leading-none">
                  {item.value}
                </h3>
                <p className="text-white/60 text-sm mt-1">{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
