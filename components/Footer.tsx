"use client";

import { motion } from "framer-motion";
import OrajaxLogo from "./OrajaxLogo";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + Tagline */}
          <div className="flex items-center gap-3">
            <OrajaxLogo size={40} animated={false} />
            <div>
              <span className="font-bold text-lg text-white block leading-none">Orajax</span>
              <span className="text-xs text-gray-400 block mt-0.5">Datos que mejoran tus procesos</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-white/10 hover:bg-[#3B82F6] rounded-xl flex items-center justify-center transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
            <motion.a
              href="mailto:hola@orajax.es"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-white/10 hover:bg-[#10B981] rounded-xl flex items-center justify-center transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Orajax. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
