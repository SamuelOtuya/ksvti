import PageHeader from "../components/common/PageHeader";
import { CheckCircle, FileText, GraduationCap, PhoneCall } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Choose Your Course",
    text: "Explore available programs and select the course that matches your career goals.",
  },
  {
    icon: CheckCircle,
    title: "Submit Application",
    text: "Fill in the application form and attach the required documents.",
  },
  {
    icon: PhoneCall,
    title: "Receive Confirmation",
    text: "Our admissions office will contact you with further guidance.",
  },
  {
    icon: GraduationCap,
    title: "Begin Training",
    text: "Report to the institution and start your practical skills training journey.",
  },
];

export default function Admissions() {
  return (
    <>
      <PageHeader
        title="Admissions"
        subtitle="Start your journey with Kahawa Sukari Vocational & Training Institute."
      />

      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[3px] mb-2">
            How To Apply
          </p>

          <h2 className="text-[#2d1b5e] text-3xl lg:text-4xl font-black uppercase">
            Admission Process
          </h2>

          <div className="w-10 h-[3px] bg-[#f5a623] mx-auto mt-4 mb-12 rounded" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="bg-[#f5f5f5] rounded-lg p-7">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-full bg-[#2d1b5e] text-[#f5a623] flex items-center justify-center">
                    <Icon size={26} />
                  </div>

                  <span className="text-[#f5a623] text-4xl font-black">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-[#2d1b5e] font-black uppercase mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-7">{step.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-6 lg:px-16 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-[#2d1b5e] text-2xl font-black uppercase mb-6">
              Admission Requirements
            </h2>

            <ul className="space-y-4 text-gray-600 text-sm">
              <li>✓ Copy of National ID or Birth Certificate</li>
              <li>✓ Passport-size photo</li>
              <li>✓ Previous academic documents where applicable</li>
              <li>✓ Completed application form</li>
              <li>✓ Course registration fee where applicable</li>
            </ul>
          </div>

          <div className="bg-[#2d1b5e] rounded-lg shadow-md p-8">
            <h2 className="text-white text-2xl font-black uppercase mb-6">
              Need Help Applying?
            </h2>

            <p className="text-white/70 text-sm leading-8 mb-8">
              Our admissions team is ready to guide you through available
              courses, entry requirements, fees, and the application process.
            </p>

            <a
              href="/contact"
              className="inline-block bg-[#f5a623] hover:bg-[#d4891a] text-white px-8 py-4 rounded font-bold"
            >
              Contact Admissions Office
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
