import { BookOpenCheck, Monitor, Timer, Users } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Industry-Relevant Training",
    description:
      "Our programs are aligned with industry needs to ensure you gain practical skills that employers value.",
  },
  {
    icon: BookOpenCheck,
    title: "Experienced Trainers",
    description:
      "Learn from qualified, passionate and industry-experienced instructors who bring real-world expertise.",
  },
  {
    icon: Monitor,
    title: "Modern Facilities",
    description:
      "State-of-the-art workshops, labs and equipment for hands-on learning in every program.",
  },
  {
    icon: Timer,
    title: "Flexible Programs",
    description:
      "We offer short courses, certificates and diplomas to fit your goals and schedule.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-6 lg:px-16">
      <div className="text-center">
        <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[3px] mb-2">
          Why Choose KSVTI?
        </p>

        <h2 className="text-[#2d1b5e] text-3xl lg:text-4xl font-black uppercase">
          Quality Training. Real Opportunities.
        </h2>

        <div className="w-10 h-[3px] bg-[#f5a623] mx-auto mt-4 mb-14 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {reasons.map((reason) => {
          const Icon = reason.icon;

          return (
            <div key={reason.title} className="flex items-start gap-4">
              <div className="w-[54px] h-[54px] rounded-full bg-[#2d1b5e] text-[#f5a623] flex items-center justify-center flex-shrink-0">
                <Icon size={26} />
              </div>

              <div>
                <h4 className="text-[#2d1b5e] text-sm font-black uppercase mb-2">
                  {reason.title}
                </h4>

                <p className="text-gray-600 text-sm leading-7">
                  {reason.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
