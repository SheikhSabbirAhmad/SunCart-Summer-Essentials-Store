import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0f2a1d] text-white overflow-hidden mt-15">

      {/* subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-9 via-green-700 to-teal-500 opacity-70 -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-wide">
              SunCart
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed">
              Your trusted summer marketplace for sunglasses, outfits,
              skincare & beach essentials. Built for comfort, style & speed.
            </p>
          </div>

          {/* ABOUT */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-200">
              About
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              SunCart brings premium summer essentials with verified quality,
              fast delivery, and trusted service across Bangladesh.
            </p>
          </div>

          {/* CONTACT */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-200">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-gray-300">

              <div className="flex items-center gap-2">
                <FaPhone className="text-emerald-400" />
                +880 1700-000000
              </div>

              <div className="flex items-center gap-2">
                <FaEnvelope className="text-emerald-400" />
                support@suncart.com
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-emerald-400" />
                Dhaka, Bangladesh
              </div>

            </div>
          </div>

          {/* FOLLOW US */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-200">
              Follow Us
            </h3>

            <div className="flex gap-3">

              <Link
                href="#"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition"
              >
                <FaTwitter />
              </Link>

            </div>

            <p className="text-sm text-gray-400 mt-4">
              Stay connected for latest summer deals 🌞
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-white/10" />

        {/* BOTTOM */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-3">

          <p>© {new Date().getFullYear()} SunCart. All rights reserved.</p>

          <div className="flex gap-6">
            <Link className="hover:text-white transition" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-white transition" href="/terms">
              Terms
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;