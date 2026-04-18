"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { viewportConfig } from "@/lib/animations";

export default function SobreOrajax() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#10B981] opacity-15 blur-md" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/gaston.jpg"
                  alt="Gastón Rojas — Orajax"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportConfig}
                transition={{ delay: 0.35, type: "spring", stiffness: 200 }}
                className="absolute -bottom-2 -right-2 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-2.5"
              >
                <div className="text-xs font-bold text-[#1E3A8A] leading-none">6 años</div>
                <div className="text-xs text-gray-400 mt-0.5">en operaciones & datos</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div>
              <span className="inline-block bg-blue-50 text-[#3B82F6] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Quiénes somos
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4 leading-tight">
                Expertos en hacer que{" "}
                <span className="text-gradient-blue-green">los datos trabajen</span>{" "}
                para ti
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-3">
                En Orajax llevamos 6 años trabajando con pymes e industriales en la implementación
                de soluciones de datos y automatización. Hemos visto de primera mano cómo las empresas
                pierden tiempo y dinero por procesos que nadie ha parado a optimizar.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                Nuestra misión es simple: que tu equipo deje de hacer lo que una máquina puede hacer,
                y empiece a enfocarse en lo que realmente mueve el negocio.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Sector industrial", "Pymes", "ERP & CRM", "Automatización", "Business Intelligence"].map((tag) => (
                <span key={tag} className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
