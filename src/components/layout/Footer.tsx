// src/components/layout/Footer.tsx

import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2d1b5e]">
      {/* Top Footer */}
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
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#f5a623] cursor-pointer">
                f
              </div>

              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#f5a623] cursor-pointer">
                in
              </div>

              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#f5a623] cursor-pointer">
                x
              </div>

              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#f5a623] cursor-pointer">
                yt
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase text-sm mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/courses">Courses</a>
              </li>
              <li>
                <a href="/student-life">Student Life</a>
              </li>
              <li>
                <a href="/news">News & Events</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
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
                <span className="text-white/60 text-sm">
                  kahawasukari.tvc@gmail.com
                </span>
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

            <div className="h-32 border border-dashed border-white/20 rounded-md flex items-center justify-center text-white/30 text-xs">
              Google Map
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="px-6 lg:px-16 py-5 flex flex-col lg:flex-row gap-3 justify-between items-center">
        <p className="text-white/40 text-xs">
          © 2026 Kahawa Sukari Vocational & Training Institute. All Rights
          Reserved.
        </p>

        <div className="flex gap-3 text-white/40 text-xs">
          <span>TVET REGISTERED</span>
          <span>|</span>
          <span>MINISTRY OF EDUCATION APPROVED</span>
        </div>
      </div>
    </footer>
  );
}
