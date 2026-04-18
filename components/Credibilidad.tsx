"use client";

import { motion } from "framer-motion";
import { Euro, TrendingUp, Bot, AlertTriangle } from "lucide-react";
import { staggerContainer, cardVariant, viewportConfig } from "@/lib/animations";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    icon: Euro,
    prefix: "€",
    value: 5,
    suffix: "M",
    label: "recuperados en eficiencias",
    context: "a través de proyectos de automatización",
    color: "text-[#10B981]",
    bg: "bg-emerald-50",
    iconColor: "text-[#10B981]",
  },
  {
    icon: TrendingUp,
    prefix: "+",
    value: 85,
    suffix: "%",
    label: "mejora en eficiencia",
    context: "reducción de tiempo en procesos clave",
    color: "text-[#3B82F6]",
    bg: "bg-blue-50",
    iconColor: "text-[#3B82F6]",
  },
  {
    icon: Bot,
    prefix: "",
    value: 90,
    suffix: "%",
    label: "tareas automáticas",
    context: "procesos antes manuales ahora automatizados",
    color: "text-[#10B981]",
    bg: "bg-emerald-50",
    iconColor: "text-[#10B981]",
  },
  {
    icon: AlertTriangle,
    prefix: "",
    value: 55,
    suffix: "%",
    label: "reducción de costes",
    context: "por errores y duplicidades de datos",
    color: "text-[#3B82F6]",
    bg: "bg-blue-50",
    iconColor: "text-[#3B82F6]",
  },
];

export default function Credibilidad() {
  return (
    <section className="py-20 lg:py-28 bg-[#1E3A8A] relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-blue-400/10"
        />
        <motion.div
          animate={{ x: [20, -20, 20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full border border-emerald-400/10"
        />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
          <defs>
            <pattern id="grid-dark" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-dark)" />
        </svg>
        {/* Gradient orbs */}
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
            Resultados reales
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Impacto comprobado
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Números reales de proyectos reales. No estimaciones, no promesas vacías.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={cardVariant}
                whileHover={{ scale: 1.04, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 text-center group"
              >
                <div className={`w-12 h-12 ${stat.bg} rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>

                <div className={`text-5xl font-extrabold ${stat.color} mb-2`}>
                  <AnimatedCounter
                    from={0}
                    to={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </div>

                <p className="text-white font-semibold text-sm mb-1">{stat.label}</p>
                <p className="text-blue-300 text-xs leading-relaxed">{stat.context}</p>

                {/* Progress bar */}
                <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min(stat.value, 100)}%` }}
                    viewport={viewportConfig}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
