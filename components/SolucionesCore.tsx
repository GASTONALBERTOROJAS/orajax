"use client";

import { motion } from "framer-motion";
import { FileCheck, BarChart3, Plug } from "lucide-react";
import { staggerContainer, viewportConfig } from "@/lib/animations";

const solutions = [
  {
    icon: FileCheck,
    title: "Automatización de operaciones",
    desc: "Eliminamos tareas manuales y repetitivas para que tu equipo se enfoque en lo que importa.",
    result: "Menos trabajo manual. Más tiempo productivo.",
    color: "#3B82F6",
    bg: "bg-blue-50",
  },
  {
    icon: BarChart3,
    title: "Centralización de datos",
    desc: "Unificamos toda la información de tu negocio en una única fuente de verdad, conectada y en tiempo real.",
    result: "Una sola visión. Decisiones más rápidas.",
    color: "#1E3A8A",
    bg: "bg-indigo-50",
  },
  {
    icon: Plug,
    title: "Integración de sistemas",
    desc: "Conectamos tu ERP, CRM y demás herramientas para que funcionen como uno solo, sin traspasos manuales.",
    result: "Sistemas conectados. Datos consistentes.",
    color: "#10B981",
    bg: "bg-emerald-50",
  },
];

export default function SolucionesCore() {
  return (
    <section id="soluciones" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-3">
            En qué podemos ayudarte
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto">
            Tres áreas de impacto concreto para tu operación.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid lg:grid-cols-3 gap-6"
        >
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                whileHover={{ scale: 1.02, boxShadow: "0 16px 32px rgba(0,0,0,0.08)" }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col gap-4"
              >
                <div className={`w-12 h-12 ${sol.bg} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6" style={{ color: sol.color }} />
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-[#1E3A8A] mb-2">{sol.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{sol.desc}</p>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-50">
                  <p className="text-sm font-semibold" style={{ color: sol.color }}>{sol.result}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
