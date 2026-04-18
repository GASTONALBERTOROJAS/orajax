"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportConfig } from "@/lib/animations";

const diferenciadores = [
  { icon: "⚡", title: "Resultados en 4 semanas", desc: "Entregamos valor desde el primer sprint, sin proyectos interminables." },
  { icon: "🎯", title: "Foco en ROI real", desc: "Cada decisión técnica está justificada con un retorno concreto para tu negocio." },
  { icon: "🤝", title: "Trato directo", desc: "Sin intermediarios. Trabajamos codo a codo con tu equipo en todo momento." },
  { icon: "🔧", title: "Adoptado por tu equipo", desc: "Diseñamos pensando en las personas que van a usarlo. La adopción es parte del entregable." },
];

export default function Credibilidad() {
  return (
    <section className="py-16 lg:py-24 bg-[#0F2554]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">
            Por qué Orajax
          </h2>
          <p className="text-blue-300 text-base max-w-md mx-auto">
            Lo que nos diferencia no es lo que decimos — es cómo lo hacemos.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 gap-5"
        >
          {diferenciadores.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex gap-4 bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="text-2xl flex-shrink-0">{d.icon}</div>
              <div>
                <h3 className="font-heading text-white font-semibold text-base mb-1">{d.title}</h3>
                <p className="text-blue-200/80 text-sm leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
