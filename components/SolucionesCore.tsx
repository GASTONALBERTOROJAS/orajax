"use client";

import { motion } from "framer-motion";
import { FileCheck, BarChart3, Plug } from "lucide-react";
import { staggerContainer, cardVariant, viewportConfig } from "@/lib/animations";
import AnimatedCounter from "./AnimatedCounter";

const solutions = [
  {
    icon: FileCheck,
    title: "Operaciones sin Papel",
    problem: "El equipo pierde horas semanales en tareas manuales y procesos repetitivos.",
    delivery: "Automatización completa de flujos, reporting automático y eliminación de trabajo manual.",
    resultLabel: "menos tareas manuales",
    resultPrefix: "+",
    resultValue: 80,
    resultSuffix: "%",
    resultContext: "en menos de 4 semanas",
    gradient: "from-blue-500 to-blue-400",
    bgLight: "from-blue-50/50 to-white",
  },
  {
    icon: BarChart3,
    title: "Datos que Hablan de Negocio",
    problem: "Datos en múltiples sistemas sin visión unificada ni dashboards conectados.",
    delivery: "Arquitectura centralizada, dashboards conectados y KPIs en tiempo real.",
    resultLabel: "visión unificada",
    resultValue: null,
    resultText: "Tiempo real",
    resultContext: "todos tus sistemas integrados",
    gradient: "from-[#3B82F6] to-[#10B981]",
    bgLight: "from-emerald-50/30 to-blue-50/30",
  },
  {
    icon: Plug,
    title: "Sistemas que se Entienden",
    problem: "ERP, CRM desconectados — la información se traspasa a mano y con errores.",
    delivery: "Integraciones robustas, flujos automáticos y datos consistentes entre sistemas.",
    resultLabel: "reducción de costes",
    resultPrefix: "",
    resultValue: 55,
    resultSuffix: "%",
    resultContext: "por errores y duplicidades eliminadas",
    gradient: "from-[#10B981] to-emerald-400",
    bgLight: "from-emerald-50/50 to-white",
  },
];

export default function SolucionesCore() {
  return (
    <section id="soluciones" className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-50/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-emerald-50/40 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-blue-50 text-[#3B82F6] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Soluciones core
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">
            Tres áreas, resultados concretos
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Metodología probada, resultados medibles, implementación en semanas.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid lg:grid-cols-3 gap-6"
        >
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                variants={cardVariant}
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className={`relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gradient-to-br ${sol.bgLight} group`}
              >
                {/* Gradient top border */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${sol.gradient}`} />

                <div className="p-7 flex flex-col gap-5">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sol.gradient} flex items-center justify-center shadow-md`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#1E3A8A] mb-3">{sol.title}</h3>

                    <div className="space-y-3 text-sm">
                      <div className="flex gap-2">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-bold mt-0.5">!</span>
                        <p className="text-gray-500 leading-relaxed">{sol.problem}</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-[#3B82F6] flex items-center justify-center text-xs font-bold mt-0.5">→</span>
                        <p className="text-gray-600 leading-relaxed">{sol.delivery}</p>
                      </div>
                    </div>
                  </div>

                  {/* Result metric */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-baseline gap-1">
                      {sol.resultValue !== null ? (
                        <AnimatedCounter
                          from={0}
                          to={sol.resultValue}
                          prefix={sol.resultPrefix}
                          suffix={sol.resultSuffix}
                          className="text-4xl font-extrabold text-[#10B981]"
                          duration={2}
                        />
                      ) : (
                        <span className="text-3xl font-extrabold text-[#10B981]">
                          {sol.resultText}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-gray-600 mt-0.5">{sol.resultLabel}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{sol.resultContext}</p>
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
