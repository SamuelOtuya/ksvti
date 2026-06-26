import { GraduationCap } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-[#2d1b5e] px-6 lg:px-16 py-16">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="flex items-start gap-6">
          <GraduationCap size={58} className="text-[#f5a623] flex-shrink-0" />

          <div>
            <h2 className="text-white text-3xl lg:text-4xl font-black uppercase">
              Ready to <span className="text-[#f5a623]">Start Your</span>{" "}
              Journey?
            </h2>

            <p className="text-white/70 text-sm mt-2 max-w-2xl">
              Join hundreds of students building successful careers through
              quality vocational training.
            </p>
          </div>
        </div>

        <a
          href="/admissions"
          className="bg-[#f5a623] hover:bg-[#d4891a] text-white px-10 py-4 rounded font-bold inline-flex justify-center whitespace-nowrap"
        >
          Apply Now →
        </a>
      </div>
    </section>
  );
}
