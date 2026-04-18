"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportConfig } from "@/lib/animations";

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    duration: "Semana 1",
    color: "#3B82F6",
    items: ["Análisis de procesos actuales", "Mapeo de sistemas y herramientas", "Identificación de puntos de fricción", "Priorización de quick wins"],
  },
  {
    num: "02",
    title: "Diseño",
    duration: "Semana 2",
    color: "#1E3A8A",
    items: ["Arquitectura de la solución", "Selección de herramientas", "Plan de integración", "Definición de KPIs"],
  },
  {
    num: "03",
    title: "Implementación",
    duration: "Semanas 3–4",
    color: "#10B981",
    items: ["Desarrollo e integración", "Pruebas con datos reales", "Formación al equipo", "Soporte post-lanzamiento"],
  },
];

export default function Proceso() {
  return (
    <section id="proceso" className="py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-3">
            Cómo trabajamos contigo
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto">
            Proceso claro y predecible. Sabes qué ocurre en cada etapa.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid lg:grid-cols-3 gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              whileHover={{ y: -4, boxShadow: "0 16px 32px rgba(0,0,0,0.07)" }}
              className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-7"
            >
              {/* Top accent */}
              <div className="h-1 absolute top-0 left-0 right-0 rounded-t-2xl" style={{ background: step.color }} />

              <div className="flex items-center justify-between mb-5">
                <span className="font-heading text-5xl font-bold text-gray-100 leading-none">{step.num}</span>
                <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-3 py-1 rounded-full">{step.duration}</span>
              </div>

              <h3 className="font-heading text-xl font-bold mb-4" style={{ color: step.color }}>{step.title}</h3>

              <ul className="flex flex-col gap-2.5">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: step.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
