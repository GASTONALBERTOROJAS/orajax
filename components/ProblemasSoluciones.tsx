"use client";

import { motion } from "framer-motion";
import { staggerContainer, cardVariant, viewportConfig } from "@/lib/animations";

const problems = [
  { emoji: "⏱️", text: "Demasiado tiempo en tareas repetitivas" },
  { emoji: "📊", text: "Datos en varios sistemas sin visión clara" },
  { emoji: "🔌", text: "Herramientas que no se hablan entre sí" },
  { emoji: "❌", text: "Decisiones basadas en información incorrecta" },
];

export default function ProblemasSoluciones() {
  return (
    <section id="problemas" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-3">
            ¿Te suena familiar?
          </h2>
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            Trabajamos con empresas que enfrentan estos problemas cada día.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {problems.map((p) => (
            <motion.div
              key={p.text}
              variants={cardVariant}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center"
            >
              <div className="text-3xl mb-3">{p.emoji}</div>
              <p className="text-sm font-medium text-gray-700 leading-snug">{p.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-5 py-2.5">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-sm font-semibold text-[#10B981]">Nosotros los resolvemos — en menos de 4 semanas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
