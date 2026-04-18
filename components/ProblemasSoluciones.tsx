"use client";

import { motion } from "framer-motion";
import { FileText, Database, Link, Shield } from "lucide-react";
import { staggerContainer, cardVariant, iconBounce, viewportConfig } from "@/lib/animations";

const items = [
  {
    icon: FileText,
    problem: "Procesos manuales",
    solution: "Automatización",
    desc: "Elimina el trabajo repetitivo y libera a tu equipo para tareas de alto valor.",
  },
  {
    icon: Database,
    problem: "Datos dispersos",
    solution: "Centralización",
    desc: "Unifica toda la información de tu negocio en una única fuente de verdad.",
  },
  {
    icon: Link,
    problem: "Sistemas desconectados",
    solution: "Integraciones",
    desc: "Conecta tu ERP, CRM y cualquier herramienta para que funcionen como uno.",
  },
  {
    icon: Shield,
    problem: "Errores en datos",
    solution: "Confiabilidad",
    desc: "Datos limpios, consistentes y validados para decisiones sin incertidumbre.",
  },
];

export default function ProblemasSoluciones() {
  return (
    <section id="problemas" className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      {/* Subtle background SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#3B82F6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-red-50 text-red-500 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ¿Te identificas?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">
            Problemas que resolvemos
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Cada desafío operacional tiene una solución concreta. Así transformamos
            los puntos de dolor en ventajas competitivas.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 gap-6"
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.problem}
                variants={cardVariant}
                whileHover={{ scale: 1.02, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm group cursor-default"
              >
                <div className="flex items-start gap-5">
                  <motion.div
                    variants={iconBounce}
                    className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-[#3B82F6]" />
                  </motion.div>

                  <div className="flex-1">
                    {/* Problem → Solution */}
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="inline-flex items-center gap-1 bg-red-50 text-red-500 text-xs font-semibold px-2.5 py-1 rounded-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        {item.problem}
                      </span>
                      <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <span className="inline-flex items-center gap-1 bg-emerald-50 text-[#10B981] text-xs font-semibold px-2.5 py-1 rounded-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        {item.solution}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
