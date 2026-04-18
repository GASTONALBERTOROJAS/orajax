"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import OrajaxLogo from "./OrajaxLogo";

const stats = [
  { value: "< 4 sem.", label: "primer resultado", dir: { x: -100, y: 60 } },
  { value: "100%", label: "enfoque en ROI", dir: { x: 100, y: -60 } },
  { value: "3 áreas", label: "core resueltas", dir: { x: 0, y: 100 } },
];

// Animated data flow SVG nodes
const nodes = [
  { id: "erp",  label: "ERP",      x: 60,  y: 80,  color: "#3B82F6" },
  { id: "crm",  label: "CRM",      x: 60,  y: 200, color: "#3B82F6" },
  { id: "ops",  label: "OPS",      x: 60,  y: 320, color: "#3B82F6" },
  { id: "hub",  label: "Orajax",   x: 210, y: 200, color: "#1E3A8A", isCenter: true },
  { id: "dash", label: "Dashboard",x: 360, y: 80,  color: "#10B981" },
  { id: "auto", label: "Automat.", x: 360, y: 200, color: "#10B981" },
  { id: "rep",  label: "Reporting",x: 360, y: 320, color: "#10B981" },
];

const edges = [
  { from: "erp", to: "hub" },
  { from: "crm", to: "hub" },
  { from: "ops", to: "hub" },
  { from: "hub", to: "dash" },
  { from: "hub", to: "auto" },
  { from: "hub", to: "rep" },
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToForm = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-emerald-50/40" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3B82F6" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/8 rounded-full blur-3xl" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center py-16 lg:py-20">

          {/* LEFT */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-sm font-medium text-[#1E3A8A]">Consultoría Senior · Operaciones & Datos</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#1E3A8A] leading-[1.1] tracking-tight"
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
              className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-xl"
            >
              Ayudo a pymes e industriales a{" "}
              <span className="text-gray-700 font-semibold">eliminar trabajo manual</span>,{" "}
              conectar sus sistemas y tomar decisiones con datos reales — no intuición.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-2.5"
            >
              {[
                "Automatización de operaciones end-to-end",
                "Integración de ERP, CRM y herramientas de negocio",
                "Arquitectura de datos y dashboards accionables",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 12px 30px rgba(16,185,129,0.3)" }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToForm}
                className="bg-[#10B981] hover:bg-[#059669] text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg cursor-pointer"
              >
                Solicita diagnóstico gratuito →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById("proceso")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-gray-200 text-gray-600 hover:border-[#3B82F6] hover:text-[#3B82F6] font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 cursor-pointer"
              >
                Cómo trabajo
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT — data flow diagram */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Logo centered on top */}
              <div className="flex justify-center mb-4">
                <OrajaxLogo size={72} animated={true} />
              </div>

              {/* SVG flow diagram */}
              <motion.svg
                viewBox="0 0 420 400"
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {/* Edges */}
                {edges.map((e, i) => {
                  const f = getNode(e.from);
                  const t = getNode(e.to);
                  const isLeft = f.x < t.x;
                  return (
                    <motion.line
                      key={`${e.from}-${e.to}`}
                      x1={f.x + 36} y1={f.y + 18}
                      x2={t.x + 36} y2={t.y + 18}
                      stroke={isLeft ? "#3B82F6" : "#10B981"}
                      strokeWidth="1.5"
                      strokeDasharray="6 3"
                      opacity={0.5}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.5 }}
                      transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                    />
                  );
                })}

                {/* Animated data dots */}
                {edges.map((e, i) => {
                  const f = getNode(e.from);
                  const t = getNode(e.to);
                  const color = f.x < t.x ? "#3B82F6" : "#10B981";
                  return (
                    <motion.circle
                      key={`dot-${e.from}-${e.to}`}
                      r="4"
                      fill={color}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        cx: [f.x + 36, t.x + 36],
                        cy: [f.y + 18, t.y + 18],
                      }}
                      transition={{
                        duration: 1.8,
                        delay: 1.2 + i * 0.3,
                        repeat: Infinity,
                        repeatDelay: 1.5,
                        ease: "easeInOut",
                      }}
                    />
                  );
                })}

                {/* Nodes */}
                {nodes.map((node, i) => (
                  <motion.g
                    key={node.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.08, type: "spring", stiffness: 200 }}
                    style={{ transformOrigin: `${node.x + 36}px ${node.y + 18}px` }}
                  >
                    <rect
                      x={node.x}
                      y={node.y}
                      width={node.isCenter ? 82 : 72}
                      height={36}
                      rx="10"
                      fill={node.isCenter ? "#1E3A8A" : "white"}
                      stroke={node.color}
                      strokeWidth={node.isCenter ? 0 : 1.5}
                      filter={node.isCenter ? "url(#glow)" : "url(#shadow)"}
                    />
                    <text
                      x={node.x + (node.isCenter ? 41 : 36)}
                      y={node.y + 22}
                      textAnchor="middle"
                      fontSize="11"
                      fontWeight={node.isCenter ? "700" : "600"}
                      fill={node.isCenter ? "white" : node.color}
                      fontFamily="system-ui, sans-serif"
                    >
                      {node.label}
                    </text>
                  </motion.g>
                ))}

                <defs>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" />
                  </filter>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#3B82F6" floodOpacity="0.3" />
                  </filter>
                </defs>
              </motion.svg>

              {/* Flying stats */}
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: stat.dir.x, y: stat.dir.y }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.7, delay: 1.4 + i * 0.2, ease: "easeOut" }}
                  className={`absolute bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-2.5 text-center ${
                    i === 0 ? "-left-4 top-16" : i === 1 ? "-right-4 top-16" : "-bottom-4 left-1/2 -translate-x-1/2"
                  }`}
                >
                  <div className="text-lg font-bold text-[#10B981] leading-none">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex justify-center pb-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-gray-300 cursor-pointer"
            onClick={() => document.getElementById("proceso")?.scrollIntoView({ behavior: "smooth" })}
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
