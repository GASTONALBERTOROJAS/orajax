"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, TrendingUp } from "lucide-react";
import { staggerContainer, cardVariant, viewportConfig } from "@/lib/animations";

const pillars = [
  {
    icon: Clock,
    title: "Resultados en < 4 semanas",
    desc: "No proyectos eternos. Cada engagement tiene hitos claros y entregas que puedes ver y medir desde la primera semana.",
    color: "#3B82F6",
    bg: "bg-blue-50",
  },
  {
    icon: ShieldCheck,
    title: "Metodología probada en industria",
    desc: "Más de 10 años aplicando soluciones de datos y automatización en entornos industriales reales, con equipos reales y presupuestos reales.",
    color: "#1E3A8A",
    bg: "bg-indigo-50",
  },
  {
    icon: TrendingUp,
    title: "Foco en ROI, no en tecnología",
    desc: "Cada decisión técnica se justifica con un retorno claro. Si una solución simple es mejor que una compleja, elijo la simple.",
    color: "#10B981",
    bg: "bg-emerald-50",
  },
  {
    icon: Users,
    title: "Adopción garantizada",
    desc: "Una solución que el equipo no usa no sirve de nada. Diseño pensando en las personas que van a trabajar con ella cada día.",
    color: "#3B82F6",
    bg: "bg-blue-50",
  },
];

const differentiators = [
  { label: "Consultor que ejecuta, no solo asesora" },
  { label: "Sin intermediarios ni subcontratas" },
  { label: "Comunicación directa y continua" },
  { label: "Soluciones a medida, no plantillas genéricas" },
  { label: "Experiencia en sector industrial y pyme" },
  { label: "Soporte post-implementación incluido" },
];

export default function Credibilidad() {
  return (
    <section className="py-20 lg:py-28 bg-[#0F2554] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full border border-blue-400/10"
        />
        <motion.div
          animate={{ x: [20, -20, 20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-emerald-400/10"
        />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <defs>
            <pattern id="grid-dark" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-dark)" />
        </svg>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-white/10 text-white/80 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/10">
            Por qué Orajax
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Lo que me diferencia
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            No soy una agencia. Soy un consultor senior que trabaja contigo directamente,
            con foco en resultados medibles y adopción real.
          </p>
        </motion.div>

        {/* 4 pillars */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12"
        >
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={cardVariant}
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group"
              >
                <div className={`w-11 h-11 ${p.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" style={{ color: p.color }} />
                </div>
                <h3 className="font-heading text-white font-semibold text-sm mb-2 leading-snug">{p.title}</h3>
                <p className="text-blue-200/80 text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Differentiators strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-7"
        >
          <p className="text-center text-white/60 text-xs font-semibold uppercase tracking-widest mb-6">
            Mi forma de trabajar
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportConfig}
                transition={{ delay: 0.05 * i }}
                className="flex items-center gap-2.5"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#10B981] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-blue-100 text-sm">{d.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
