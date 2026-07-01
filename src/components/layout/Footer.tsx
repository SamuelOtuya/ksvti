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

export default function Footer() {
  return (
    <footer className="bg-[#2d1b5e]">
      <div className="px-6 lg:px-16 py-16 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#f5a623] font-black">
                KS
              </div>

              <div>
                <h3 className="text-white font-extrabold text-sm uppercase">
                  Kahawa Sukari
                </h3>
                <p className="text-white/60 text-[10px] uppercase">
                  Vocational & Training Institute
                </p>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-7 mt-5">
              Kahawa Sukari Vocational & Training Institute (KSVTI) is a TVET
              registered institution committed to empowering learners with
              practical skills for real-world success.
            </p>

            <div className="flex gap-3 mt-5">
              <a
                href="https://www.facebook.com/kahawasukarivti/"
                className="social-icon"
              >
                <FaFacebookF size={14} color="white" />
              </a>
              <a
                href="https://www.instagram.com/kahawasukarivti/"
                className="social-icon"
              >
                <FaInstagram size={14} color="white" />
              </a>
              <a
                href="https://www.linkedin.com/company/kahawasukarivti/"
                className="social-icon"
              >
                <FaLinkedinIn size={14} color="white" />
              </a>
              <a href="https://twitter.com/ksvti" className="social-icon">
                <FaXTwitter size={14} color="white" />
              </a>
              <a
                href="https://lite.tiktok.com/t/ZS96yyvtKdxAq-UXWVu/"
                className="social-icon"
              >
                <FaTiktok size={14} color="white" />
              </a>
              <a
                href="https://www.youtube.com/@kahawasukarivti"
                className="social-icon"
              >
                <FaYoutube size={14} color="white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase text-sm mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="/" className="hover:text-[#f5a623]">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#f5a623]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-[#f5a623]">
                  Courses
                </a>
              </li>
              <li>
                <a href="/student-life" className="hover:text-[#f5a623]">
                  Student Life
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-[#f5a623]">
                  News & Events
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#f5a623]">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-[#f5a623]">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold uppercase text-sm mb-5">
              Popular Courses
            </h4>

            <ul className="space-y-3 text-sm text-white/60">
              <li>Baking & Pastry</li>
              <li>Hairdressing</li>
              <li>Electrical Installation</li>
              <li>Plumbing</li>
              <li>ICT & Computer Studies</li>
              <li>CCTV Installation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase text-sm mb-5">
              Contact Us
            </h4>

            <div className="space-y-4">
              <div className="flex gap-3">
                <Phone
                  size={16}
                  className="text-[#f5a623] mt-1 flex-shrink-0"
                />
                <span className="text-white/60 text-sm">+254 717 976 448</span>
              </div>

              <div className="flex gap-3">
                <Mail size={16} className="text-[#f5a623] mt-1 flex-shrink-0" />
                <span className="text-white/60 text-sm">info@ksvti.co.ke</span>
              </div>

              <div className="flex gap-3">
                <MapPin
                  size={16}
                  className="text-[#f5a623] mt-1 flex-shrink-0"
                />
                <span className="text-white/60 text-sm">
                  Kahawa Sukari Estate, Mizpah Plaza, 4th Floor
                </span>
              </div>

              <div className="flex gap-3">
                <Clock
                  size={16}
                  className="text-[#f5a623] mt-1 flex-shrink-0"
                />
                <span className="text-white/60 text-sm">
                  Mon - Fri: 8:00 AM - 5:00 PM
                </span>
              </div>

              <div className="flex gap-3">
                <Globe
                  size={16}
                  className="text-[#f5a623] mt-1 flex-shrink-0"
                />
                <span className="text-white/60 text-sm">www.ksvti.ac.ke</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-white font-bold uppercase text-sm mb-5">
              Location
            </h4>

            <div className="h-40 rounded-md overflow-hidden border border-white/10 shadow-md">
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
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <p className="text-center text-xs text-white/40 lg:text-left">
            © 2026 Kahawa Sukari Vocational & Training Institute. All Rights
            Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-white/40">
            <span>TVET REGISTERED</span>
            <span>|</span>
            <span>MINISTRY OF EDUCATION APPROVED</span>
          </div>

          <a
            href="https://wa.me/254796577415?text=Hello%20Dev%20Sam,%20I%20would%20like%20to%20inquire%20about%20website%20design%20and%20development."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-white/40 transition-all duration-300 hover:text-[#f5a623]"
          >
            Designed &amp; Developed by{" "}
            <span className="font-bold text-[#f5a623]">Dev Sam</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
