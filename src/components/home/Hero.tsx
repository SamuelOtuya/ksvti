import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import hero1 from "../../assets/images/hero11.jpg";
import hero2 from "../../assets/images/hero23.jpg";
import hero3 from "../../assets/images/hero13.jpg";

const slides = [
  {
    title: "Transform Your Future",
    subtitle: "Through Quality Skills Training",
    description:
      "Industry-focused programs designed to prepare you for employment, entrepreneurship, and lifelong success.",
    image: hero1,
  },
  {
    title: "Build Skills That Matter",
    subtitle: "Hands-On Practical Learning",
    description:
      "Learn from experienced trainers using modern facilities and industry-relevant equipment.",
    image: hero2,
  },
  {
    title: "Launch Your Career",
    subtitle: "TVET Registered Institution",
    description:
      "Join hundreds of successful graduates building rewarding careers across various industries.",
    image: hero3,
  },
];

export default function Hero() {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[650px]">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2d1b5e]/95 via-[#2d1b5e]/80 to-[#2d1b5e]/30" />

              {/* Gold Shape */}
              <div className="hidden lg:block absolute left-[46%] top-0 bottom-0 w-[85px] bg-[#f5a623] [clip-path:polygon(60%_0%,100%_0%,40%_100%,0%_100%)] z-10" />

              {/* Content */}
              <div className="relative z-20 h-full flex items-center px-8 lg:px-16">
                <div className="max-w-[520px]">
                  <p className="text-[#f5a623] uppercase tracking-[3px] font-bold mb-3">
                    Build Skills. Launch Careers.
                  </p>

                  <h1 className="text-white font-black uppercase leading-none text-5xl lg:text-7xl mb-4">
                    {slide.title}
                  </h1>

                  <h2 className="text-[#f5a623] uppercase font-bold text-xl mb-5">
                    {slide.subtitle}
                  </h2>

                  <p className="text-gray-200 leading-8 mb-8">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#"
                      className="bg-[#f5a623] hover:bg-[#d4891a] text-white px-8 py-4 rounded font-bold"
                    >
                      Apply Now →
                    </a>

                    <a
                      href="#"
                      className="border-2 border-white/60 hover:border-white text-white px-8 py-4 rounded font-bold"
                    >
                      Explore Courses
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
