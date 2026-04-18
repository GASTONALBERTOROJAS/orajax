"use client";

import { motion } from "framer-motion";
import { Search, Layers, Rocket } from "lucide-react";
import { staggerContainer, viewportConfig } from "@/lib/animations";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Diagnóstico",
    duration: "Semana 1",
    desc: "Analizamos en profundidad tus procesos actuales, sistemas y puntos de fricción. Identificamos quick wins y priorizamos el impacto.",
    items: ["Entrevistas con el equipo", "Mapeo de procesos", "Auditoría de sistemas", "Identificación de gaps"],
    color: "#3B82F6",
    bg: "bg-blue-50",
  },
  {
    num: "02",
    icon: Layers,
    title: "Diseño de solución",
    duration: "Semana 2",
    desc: "Diseñamos la arquitectura exacta de la solución — sin software innecesario, sin complejidad artificial. Solo lo que tu negocio necesita.",
    items: ["Arquitectura de datos", "Selección de herramientas", "Plan de integración", "KPIs y métricas de éxito"],
    color: "#1E3A8A",
    bg: "bg-indigo-50",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Implementación",
    duration: "Semanas 3-4",
    desc: "Ejecutamos, probamos y desplegamos. Tu equipo recibe formación y tienes soporte directo conmigo durante todo el proceso.",
    items: ["Desarrollo e integración", "Pruebas con datos reales", "Formación al equipo", "Soporte post-lanzamiento"],
    color: "#10B981",
    bg: "bg-emerald-50",
  },
];

export default function Proceso() {
  return (
    <section id="proceso" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-50 text-[#3B82F6] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Metodología
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">
            Cómo trabajo contigo
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Un proceso claro, predecible y sin sorpresas.
            Sabes exactamente qué ocurre en cada etapa y qué esperar al final.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-emerald-200 mx-32" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid lg:grid-cols-3 gap-8"
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                  className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col gap-5"
                >
                  {/* Step number bubble */}
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-14 h-14 ${step.bg} rounded-2xl flex items-center justify-center`}
                      style={{ boxShadow: `0 4px 14px ${step.color}20` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: step.color }} />
                    </motion.div>
                    <div className="text-right">
                      <span className="font-heading text-4xl font-bold text-gray-100 leading-none">{step.num}</span>
                      <div className="text-xs font-semibold text-gray-400 mt-0.5">{step.duration}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#1E3A8A] mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>

                  <ul className="flex flex-col gap-2 mt-auto">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: step.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Color accent bottom border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl" style={{ background: `linear-gradient(90deg, ${step.color}40, ${step.color})` }} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-500 text-base mb-5">
            El diagnóstico gratuito es el primer paso — y te llevas valor desde la primera sesión.
          </p>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 12px 30px rgba(16,185,129,0.3)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#10B981] hover:bg-[#059669] text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg cursor-pointer"
          >
            Empieza con el diagnóstico →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
