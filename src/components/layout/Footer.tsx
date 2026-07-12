// src/components/layout/Footer.tsx

import { Phone, Mail, MapPin, Clock, Globe, ExternalLink } from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const partnerLogos = [
  {
    name: "ICM",
    image: "/partners/icm.png",
    link: "#",
  },
  {
    name: "NITA",
    image: "/partners/nita.png",
    link: "#",
  },
  {
    name: "TVETA",
    image: "/partners/tvet.jpg",
    link: "#",
  },
  {
    name: "Ministry of Education",
    image: "/partners/moe.jpg",
    link: "#",
  },
  {
    name: "CDACC",
    image: "/partners/ciddac.png",
    link: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#2d1b5e]">
      {/* Main Footer */}
      <div className="border-b border-white/10 px-6 py-16 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-[#f5a623] font-black">
                KS
              </div>

              <div>
                <h3 className="text-sm font-extrabold uppercase text-white">
                  Kahawa Sukari
                </h3>

                <p className="text-[10px] uppercase text-white/60">
                  Vocational &amp; Training Institute
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-white/60">
              Kahawa Sukari Vocational &amp; Training Institute is an
              institution committed to empowering learners with practical skills
              for real-world success.
            </p>

            {/* Social Media */}
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/kahawasukarivti/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KSVTI Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition duration-300 hover:bg-[#f5a623]"
              >
                <FaFacebookF size={14} className="text-white" />
              </a>

              <a
                href="https://www.instagram.com/kahawasukarivti/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KSVTI Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition duration-300 hover:bg-[#f5a623]"
              >
                <FaInstagram size={15} className="text-white" />
              </a>

              <a
                href="https://www.linkedin.com/company/kahawasukarivti/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KSVTI LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition duration-300 hover:bg-[#f5a623]"
              >
                <FaLinkedinIn size={14} className="text-white" />
              </a>

              <a
                href="https://twitter.com/ksvti"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KSVTI X"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition duration-300 hover:bg-[#f5a623]"
              >
                <FaXTwitter size={14} className="text-white" />
              </a>

              <a
                href="https://lite.tiktok.com/t/ZS96yyvtKdxAq-UXWVu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KSVTI TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition duration-300 hover:bg-[#f5a623]"
              >
                <FaTiktok size={14} className="text-white" />
              </a>

              <a
                href="https://www.youtube.com/@kahawasukarivti"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KSVTI YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition duration-300 hover:bg-[#f5a623]"
              >
                <FaYoutube size={15} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase text-white">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="/"
                  className="transition duration-300 hover:text-[#f5a623]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="transition duration-300 hover:text-[#f5a623]"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/courses"
                  className="transition duration-300 hover:text-[#f5a623]"
                >
                  Courses
                </a>
              </li>

              <li>
                <a
                  href="/student-life"
                  className="transition duration-300 hover:text-[#f5a623]"
                >
                  Student Life
                </a>
              </li>

              <li>
                <a
                  href="/news"
                  className="transition duration-300 hover:text-[#f5a623]"
                >
                  News &amp; Events
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="transition duration-300 hover:text-[#f5a623]"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="/gallery"
                  className="transition duration-300 hover:text-[#f5a623]"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase text-white">
              Popular Courses
            </h4>

            <ul className="space-y-3 text-sm text-white/60">
              <li>Baking &amp; Pastry</li>
              <li>Hairdressing</li>
              <li>Electrical Installation</li>
              <li>Plumbing</li>
              <li>ICT &amp; Computer Studies</li>
              <li>CCTV Installation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase text-white">
              Contact Us
            </h4>

            <div className="space-y-4">
              <a href="tel:+254717976448" className="group flex gap-3">
                <Phone
                  size={16}
                  className="mt-1 flex-shrink-0 text-[#f5a623]"
                />

                <span className="text-sm text-white/60 transition duration-300 group-hover:text-white">
                  +254 717 976 448
                </span>
              </a>

              <a href="mailto:info@ksvti.co.ke" className="group flex gap-3">
                <Mail size={16} className="mt-1 flex-shrink-0 text-[#f5a623]" />

                <span className="break-all text-sm text-white/60 transition duration-300 group-hover:text-white">
                  info@ksvti.co.ke
                </span>
              </a>

              <div className="flex gap-3">
                <MapPin
                  size={16}
                  className="mt-1 flex-shrink-0 text-[#f5a623]"
                />

                <span className="text-sm leading-6 text-white/60">
                  Kahawa Sukari Estate, Mizpah Plaza, 4th Floor
                </span>
              </div>

              <div className="flex gap-3">
                <Clock
                  size={16}
                  className="mt-1 flex-shrink-0 text-[#f5a623]"
                />

                <span className="text-sm leading-6 text-white/60">
                  Mon - Fri: 8:00 AM - 5:00 PM
                  <br />
                  Sat: 8:00 AM - 1:00 PM
                </span>
              </div>

              <a
                href="https://www.ksvti.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-3"
              >
                <Globe
                  size={16}
                  className="mt-1 flex-shrink-0 text-[#f5a623]"
                />

                <span className="text-sm text-white/60 transition duration-300 group-hover:text-white">
                  www.ksvti.co.ke
                </span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase text-white">
              Location
            </h4>

            <div className="h-40 overflow-hidden rounded-md border border-white/10 shadow-md">
              <iframe
                title="KSVTI Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15412.314516413671!2d36.92997479819463!3d-1.190544880879863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fa20ca76fb3%3A0x1f0589302d8290be!2sMizpah%20House!5e0!3m2!1sen!2ske!4v1782551130339!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <a
              href="https://maps.google.com/?q=Mizpah+Plaza+Kahawa+Sukari"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-[#f5a623] transition duration-300 hover:text-white"
            >
              View location on Google Maps
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
        <h4 className="text-center text-white font-bold uppercase tracking-wider text-sm justify-center">
          Partners and Accreditation
        </h4>
        <div className="mt-6 flex flex-wrap justify-center gap-8 lg:gap-10">
          {[
            { src: "/partners/icm.png", alt: "ICM" },
            { src: "/partners/nita.png", alt: "NITA" },
            { src: "/partners/tvet.jpg", alt: "TVETA" },
            { src: "/partners/knec.jpg", alt: "CIDDAC" },
            { src: "/partners/moe.jpg", alt: "Ministry of Education" },
          ].map((partner) => (
            <div
              key={partner.alt}
              className="flex h-14 w-20 items-center justify-center"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="max-h-10 max-w-full object-contain opacity-80 transition duration-300 hover:scale-105 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Partners and Accreditation */}
      {/* Partners */}
      {/* <div className="border-t border-white/10 px-6 lg:px-16 py-8">
        <h4 className="text-center text-white font-bold uppercase tracking-wider text-sm">
          Partners and Accreditation
        </h4>

        <div className="mt-6 flex flex-wrap justify-center gap-8 lg:gap-10">
          {[
            { src: "/partners/icm.png", alt: "ICM" },
            { src: "/partners/nita.png", alt: "NITA" },
            { src: "/partners/tvet.jpg", alt: "TVETA" },
            { src: "/partners/ciddac.png", alt: "CIDDAC" },
            { src: "/partners/moe.jpg", alt: "Ministry of Education" },
          ].map((partner) => (
            <div
              key={partner.alt}
              className="flex h-14 w-20 items-center justify-center"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="max-h-10 max-w-full object-contain opacity-80 transition duration-300 hover:scale-105 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div> */}

      {/* Bottom Footer */}
      {/* Bottom Footer */}
      <div className="border-t border-white/10 px-6 py-5 lg:px-16">
        <div className="flex flex-col gap-4 text-center lg:flex-row lg:items-center lg:justify-between">
          {/* Left */}
          <p className="text-xs text-white/40">
            © 2026 Kahawa Sukari Vocational &amp; Training Institute. All Rights
            Reserved.
          </p>

          <a
            href="https://wa.me/254796577415?text=Hello%20Dev%20Sam,%20I%20would%20like%20to%20inquire%20about%20website%20design%20and%20development."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 text-xs text-white/40 transition hover:text-[#f5a623]"
          >
            Designed &amp; Developed by
            <span className="font-bold text-[#f5a623]">Dev Sam</span>
            <ExternalLink size={13} />
          </a>

          {/* Middle */}
          <div className="flex items-center justify-center gap-2 text-xs text-white/40">
            <span>KSVTI</span>
            <span>|</span>
            <span>Ministry of Education Approved</span>
          </div>

          {/* Right */}
        </div>
      </div>
    </footer>
  );
}
