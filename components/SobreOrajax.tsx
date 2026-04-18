"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { viewportConfig } from "@/lib/animations";

const values = [
  {
    title: "Claridad antes que tecnología",
    desc: "No propongo software por proponer. Primero entiendo el problema, luego busco la solución más simple y efectiva.",
  },
  {
    title: "Resultados en semanas, no meses",
    desc: "Trabajo con metodología ágil orientada a entregar valor rápido. El primer resultado lo ves antes de las 4 semanas.",
  },
  {
    title: "Contigo en todo el proceso",
    desc: "No desaparezco tras la entrega. Me aseguro de que tu equipo adopte la solución y la use con confianza.",
  },
];

export default function SobreOrajax() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT — photo + decoration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-200/60"
              />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#10B981] opacity-20 blur-md" />

              {/* Photo */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/gaston.jpg"
                  alt="Gastón Rojas — Orajax"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportConfig}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className="absolute -bottom-3 -right-4 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1E3A8A] leading-none">Consultor Senior</div>
                    <div className="text-xs text-gray-400 mt-0.5">Ops & Data</div>
                  </div>
                </div>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportConfig}
                transition={{ delay: 0.55, type: "spring", stiffness: 200 }}
                className="absolute -top-3 -left-4 bg-[#1E3A8A] rounded-2xl shadow-lg px-4 py-3"
              >
                <div className="text-white text-xs font-semibold leading-tight">
                  +10 años<br />
                  <span className="text-blue-200 font-normal">en operaciones</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="inline-block bg-blue-50 text-[#3B82F6] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Quién está detrás
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4 leading-tight">
                Hola, soy Gastón —<br />
                <span className="text-gradient-blue-green">el consultor que ejecuta</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-3">
                Con más de 10 años trabajando en operaciones e implementación de sistemas en entornos industriales y pymes,
                he visto de primera mano cómo las empresas pierden tiempo y dinero por procesos que nadie ha parado a revisar.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                Fundé Orajax para ser el consultor que me hubiera gustado tener: uno que entiende el negocio,
                habla con el equipo, y entrega soluciones que la gente realmente usa — no informes que se archivan.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-2">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportConfig}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#3B82F6] to-[#10B981] rounded-lg flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1E3A8A] text-sm mb-0.5">{v.title}</div>
                    <div className="text-gray-500 text-sm leading-relaxed">{v.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
