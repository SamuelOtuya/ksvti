import PageHeader from "../components/common/PageHeader";
import { Award, BookOpenCheck, HeartHandshake, Target } from "lucide-react";
import director1Img from "../assets/dir1.jpg";
import director2Img from "../assets/dir2.jpg";
import schoolImage from "../assets/images/aboutksvti.jpeg";

const values = [
  {
    icon: BookOpenCheck,
    title: "Excellence",
    text: "We are committed to delivering quality training that meets industry standards.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity",
    text: "We promote honesty, responsibility, discipline, and strong moral values.",
  },
  {
    icon: Target,
    title: "Innovation",
    text: "We embrace modern training methods, technology, and practical learning.",
  },
  {
    icon: Award,
    title: "Professionalism",
    text: "We prepare learners to serve confidently and professionally in the workplace.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Empowering learners with practical skills, character development, and career-focused training."
      />

      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="h-[380px] rounded-lg overflow-hidden shadow-lg">
            <img
              src={schoolImage}
              alt="KSVTI campus building"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[3px] mb-3">
              Who We Are
            </p>

            <h2 className="text-[#2d1b5e] text-3xl lg:text-4xl font-black uppercase leading-tight mb-5">
              Kahawa Sukari Vocational & Training Institute
            </h2>

            <p className="text-gray-600 text-sm leading-8 mb-5">
              Kahawa Sukari Vocational & Training Institute is a TVET registered
              institution dedicated to equipping learners with hands-on skills
              for employment, entrepreneurship, and lifelong success.
            </p>

            <p className="text-gray-600 text-sm leading-8">
              Through practical training, experienced instructors, and a
              supportive learning environment, we prepare students to become
              competent, confident, and responsible professionals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-16 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#f5a623]">
            <h3 className="text-[#2d1b5e] text-2xl font-black uppercase mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm leading-8">
              To provide quality, practical, and affordable vocational training
              that empowers learners with skills for employment,
              entrepreneurship, and personal growth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#2d1b5e]">
            <h3 className="text-[#2d1b5e] text-2xl font-black uppercase mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm leading-8">
              To be a leading vocational training institution recognized for
              excellence in skills development, innovation, and human greatness.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="text-center">
          <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[3px] mb-2">
            Our Leadership
          </p>

          <h2 className="text-[#2d1b5e] text-3xl lg:text-4xl font-black uppercase">
            Meet Our Directors
          </h2>

          <div className="w-10 h-[3px] bg-[#f5a623] mx-auto mt-4 mb-12 rounded" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f5f5f5] rounded-lg overflow-hidden shadow-md">
            <div className="h-[320px] bg-gray-300 flex items-center justify-center text-gray-500">
              <img
                src={director1Img}
                alt="Director One"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-7">
              <h3 className="text-[#2d1b5e] text-xl font-black uppercase mb-1">
                Grace Maina
              </h3>

              <p className="text-[#f5a623] font-bold text-sm mb-4">Director</p>

              <p className="text-gray-600 text-sm leading-7">
                Provides strategic leadership and guidance in ensuring KSVTI
                delivers quality vocational training and student-centered
                development.
              </p>
            </div>
          </div>

          <div className="bg-[#f5f5f5] rounded-lg overflow-hidden shadow-md">
            <div className="h-[320px] bg-gray-300 flex items-center justify-center text-gray-500">
              <img
                src={director2Img}
                alt="Director Two"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-7">
              <h3 className="text-[#2d1b5e] text-xl font-black uppercase mb-1">
                Julia Mburu
              </h3>

              <p className="text-[#f5a623] font-bold text-sm mb-4">Director</p>

              <p className="text-gray-600 text-sm leading-7">
                Supports institutional growth, academic excellence, innovation,
                and the development of practical skills among learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="text-center">
          <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[3px] mb-2">
            Our Core Values
          </p>

          <h2 className="text-[#2d1b5e] text-3xl lg:text-4xl font-black uppercase">
            What Guides Us
          </h2>

          <div className="w-10 h-[3px] bg-[#f5a623] mx-auto mt-4 mb-12 rounded" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="bg-white shadow-md rounded-lg p-7 hover:-translate-y-1 transition"
              >
                <div className="w-14 h-14 rounded-full bg-[#2d1b5e] text-[#f5a623] flex items-center justify-center mb-5">
                  <Icon size={27} />
                </div>

                <h3 className="text-[#2d1b5e] font-black uppercase mb-3">
                  {value.title}
                </h3>

                <p className="text-gray-600 text-sm leading-7">{value.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-6 lg:px-16 bg-[#f5f5f5]">
        <div className="text-center mb-10">
          <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[3px] mb-2">
            Find Us
          </p>

          <h2 className="text-[#2d1b5e] text-3xl lg:text-4xl font-black uppercase">
            Our Location
          </h2>

          <div className="w-10 h-[3px] bg-[#f5a623] mx-auto mt-4 rounded" />
        </div>

        <div className="max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="Kahawa Sukari Vocational and Training Institute Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15412.314516413671!2d36.92997479819463!3d-1.190544880879863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fa20ca76fb3%3A0x1f0589302d8290be!2sMizpah%20House!5e0!3m2!1sen!2ske!4v1782551130339!5m2!1sen!2ske"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full"
          />
        </div>
      </section>

      <section className="py-20 px-6 lg:px-16 bg-[#2d1b5e]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[3px] mb-3">
            Our Commitment
          </p>

          <h2 className="text-white text-3xl lg:text-4xl font-black uppercase mb-5">
            Training for Skills, Character, and Opportunity
          </h2>

          <p className="text-white/70 text-sm leading-8 max-w-3xl mx-auto mb-8">
            At KSVTI, we believe education should go beyond the classroom. Our
            goal is to produce skilled graduates who are confident, ethical,
            employable, and ready to contribute positively to society.
          </p>

          <a
            href="/apply"
            className="inline-block bg-[#f5a623] hover:bg-[#d4891a] text-white px-9 py-4 rounded font-bold"
          >
            Apply Now
          </a>
        </div>
      </section>
    </>
  );
}
