"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const nodes = [
  { id: "erp",  label: "ERP",       x: 55,  y: 80,  color: "#3B82F6" },
  { id: "crm",  label: "CRM",       x: 55,  y: 200, color: "#3B82F6" },
  { id: "ops",  label: "OPS",       x: 55,  y: 320, color: "#3B82F6" },
  { id: "hub",  label: "Orajax",    x: 200, y: 200, color: "#1E3A8A", isCenter: true },
  { id: "dash", label: "Dashboard", x: 345, y: 80,  color: "#10B981" },
  { id: "auto", label: "Automat.",  x: 345, y: 200, color: "#10B981" },
  { id: "rep",  label: "Reporting", x: 345, y: 320, color: "#10B981" },
];

const edges = [
  { from: "erp", to: "hub" }, { from: "crm", to: "hub" }, { from: "ops", to: "hub" },
  { from: "hub", to: "dash" }, { from: "hub", to: "auto" }, { from: "hub", to: "rep" },
];

function getNode(id: string) { return nodes.find((n) => n.id === id)!; }

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white to-emerald-50/30" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3B82F6" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center py-16 lg:py-20">

          {/* LEFT */}
          <div className="lg:col-span-3 flex flex-col gap-7">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-sm font-medium text-[#1E3A8A]">Consultoría de Operaciones & Datos</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-[#1E3A8A] leading-[1.1] tracking-tight"
            >
              Datos que{" "}
              <span className="text-gradient-blue-green">mejoran</span>
              <br />
              tus procesos
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-lg"
            >
              Ayudamos a pymes e industriales a eliminar trabajo manual,
              conectar sus sistemas y tomar decisiones con datos reales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 12px 30px rgba(16,185,129,0.3)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#10B981] hover:bg-[#059669] text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg cursor-pointer"
              >
                Solicita diagnóstico gratuito →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById("proceso")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-gray-200 text-gray-500 hover:border-[#3B82F6] hover:text-[#3B82F6] font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 cursor-pointer"
              >
                Cómo trabajamos
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT — data flow */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <motion.svg
              viewBox="0 0 420 400"
              className="w-full max-w-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {edges.map((e, i) => {
                const f = getNode(e.from), t = getNode(e.to);
                return (
                  <motion.line
                    key={`${e.from}-${e.to}`}
                    x1={f.x + 36} y1={f.y + 18} x2={t.x + 36} y2={t.y + 18}
                    stroke={f.x < t.x ? "#3B82F6" : "#10B981"}
                    strokeWidth="1.5" strokeDasharray="6 3" opacity={0.45}
                    initial={{ opacity: 0 }} animate={{ opacity: 0.45 }}
                    transition={{ duration: 0.6, delay: 0.8 + i * 0.08 }}
                  />
                );
              })}

              {edges.map((e, i) => {
                const f = getNode(e.from), t = getNode(e.to);
                const color = f.x < t.x ? "#3B82F6" : "#10B981";
                return (
                  <motion.circle key={`dot-${i}`} r="4" fill={color}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0], cx: [f.x + 36, t.x + 36], cy: [f.y + 18, t.y + 18] }}
                    transition={{ duration: 1.8, delay: 1.2 + i * 0.3, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
                  />
                );
              })}

              {nodes.map((node, i) => (
                <motion.g key={node.id}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.08, type: "spring", stiffness: 200 }}
                  style={{ transformOrigin: `${node.x + 36}px ${node.y + 18}px` }}
                >
                  <rect x={node.x} y={node.y} width={node.isCenter ? 82 : 72} height={36} rx="10"
                    fill={node.isCenter ? "#1E3A8A" : "white"}
                    stroke={node.color} strokeWidth={node.isCenter ? 0 : 1.5}
                    filter={node.isCenter ? "url(#glow)" : "url(#shadow)"}
                  />
                  <text x={node.x + (node.isCenter ? 41 : 36)} y={node.y + 22}
                    textAnchor="middle" fontSize="11"
                    fontWeight={node.isCenter ? "700" : "600"}
                    fill={node.isCenter ? "white" : node.color}
                    fontFamily="system-ui, sans-serif"
                  >{node.label}</text>
                </motion.g>
              ))}

              <defs>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.07" />
                </filter>
                <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#3B82F6" floodOpacity="0.25" />
                </filter>
              </defs>
            </motion.svg>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex justify-center pb-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-gray-300 cursor-pointer"
            onClick={() => document.getElementById("problemas")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="text-xs tracking-widest uppercase">Descubre más</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
