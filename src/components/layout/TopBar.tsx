import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function TopBar() {
  return (
    <div className="hidden lg:block bg-[#2d1b5e] text-gray-300 text-xs">
      <div className="max-w-[1600px] mx-auto px-10 py-2 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+254717976448"
            className="flex items-center gap-2 hover:text-[#f5a623] transition"
          >
            <Phone size={13} />
            +254 717 976 448
          </a>

          <a
            href="mailto:kahawasukari.tvc@gmail.com"
            className="flex items-center gap-2 hover:text-[#f5a623] transition"
          >
            <Mail size={13} />
            kahawasukari.tvc@gmail.com
          </a>

          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-[#f5a623]" />
            <span>Kahawa Sukari Estate, Mizpa Plaza, 4th Floor</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-gray-300 hover:text-[#f5a623] transition no-underline"
          >
            <FaFacebookF size={14} />
          </a>

          <a
            href="#"
            className="text-gray-300 hover:text-[#f5a623] transition no-underline"
          >
            <FaLinkedinIn size={14} />
          </a>

          <a
            href="#"
            className="text-gray-300 hover:text-[#f5a623] transition no-underline"
          >
            <FaXTwitter size={14} />
          </a>

          <a
            href="#"
            className="text-gray-300 hover:text-[#f5a623] transition no-underline"
          >
            <FaTiktok size={14} />
          </a>

          <a
            href="#"
            className="text-gray-300 hover:text-[#f5a623] transition no-underline"
          >
            <FaYoutube size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
