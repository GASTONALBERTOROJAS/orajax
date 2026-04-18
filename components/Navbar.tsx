"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import OrajaxLogo from "./OrajaxLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToForm = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Tagline */}
          <div className="flex items-center gap-3">
            <OrajaxLogo size={36} animated={false} />
            <div>
              <span className="font-bold text-lg text-[#1E3A8A] leading-none block">
                Orajax
              </span>
              <span className="text-[10px] text-gray-400 leading-none block tracking-wide">
                Datos que mejoran tus procesos
              </span>
            </div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToForm}
            className="bg-[#10B981] hover:bg-[#059669] text-white font-semibold text-sm px-4 py-2 rounded-xl transition-colors duration-200 shadow-sm cursor-pointer"
          >
            Solicita diagnóstico
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
