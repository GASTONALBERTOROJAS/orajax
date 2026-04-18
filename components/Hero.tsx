"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import OrajaxLogo from "./OrajaxLogo";

const stats = [
  { value: "€5M", label: "recuperados", dir: { x: -120, y: 80 } },
  { value: "+85%", label: "eficiencia", dir: { x: 120, y: -80 } },
  { value: "90%", label: "tareas auto.", dir: { x: 0, y: 120 } },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToForm = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-emerald-50/50" />
        {/* Decorative lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3B82F6" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center py-16 lg:py-24">

          {/* LEFT: Text content (60%) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-sm font-medium text-[#1E3A8A]">
                Consultoría de Operaciones & Datos
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E3A8A] leading-tight tracking-tight"
            >
              Datos que{" "}
              <span className="text-gradient-blue-green">mejoran</span>
              <br />
              tus procesos
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="text-lg sm:text-xl text-gray-500 font-medium"
            >
              Automatizamos operaciones, integramos sistemas,{" "}
              <span className="text-gray-700 font-semibold">transformamos resultados</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="text-base text-gray-500 max-w-xl leading-relaxed"
            >
              En menos de 4 semanas, reducimos tareas manuales, centralizamos datos
              y conectamos sistemas para que tu equipo se enfoque en lo que importa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(16,185,129,0.3)" }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToForm}
                className="bg-[#10B981] hover:bg-[#059669] text-white font-bold text-base px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg cursor-pointer"
              >
                Solicita tu diagnóstico gratuito →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document.getElementById("soluciones")?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-blue-50 font-semibold text-base px-8 py-4 rounded-xl transition-colors duration-200 cursor-pointer"
              >
                Ver soluciones
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-6 pt-2"
            >
              <div className="flex items-center gap-1.5 text-sm text-gray-400">
                <svg className="w-4 h-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Sin compromiso
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-400">
                <svg className="w-4 h-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Resultados en 4 semanas
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Logo + flying stats (40%) */}
          <div className="lg:col-span-2 flex items-center justify-center relative">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">

              {/* Decorative ring */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200 animate-spin"
                style={{ animationDuration: "20s" }}
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-4 rounded-full border border-emerald-100"
              />

              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <OrajaxLogo size={160} animated={true} />
              </div>

              {/* Flying stats */}
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: stat.dir.x, y: stat.dir.y }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.9 + i * 0.2,
                    ease: "easeOut",
                  }}
                  className={`absolute ${
                    i === 0
                      ? "-left-12 top-8"
                      : i === 1
                      ? "-right-12 top-8"
                      : "-bottom-8 left-1/2 -translate-x-1/2"
                  } bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-3 text-center`}
                >
                  <div className="text-2xl font-extrabold text-[#10B981] leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex justify-center pb-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1.5 text-gray-300 cursor-pointer"
            onClick={() =>
              document.getElementById("problemas")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-xs font-medium tracking-widest uppercase">Descubre más</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
