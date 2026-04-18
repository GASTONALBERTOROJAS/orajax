"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  nombre: z.string().min(2, "Nombre requerido (mín. 2 caracteres)"),
  email: z.string().email("Email no válido"),
  empresa: z.string().min(1, "Empresa requerida"),
  cargo: z.string().min(1, "Cargo requerido"),
});

type FormData = z.infer<typeof schema>;

export default function CTAFormulario() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Diagnóstico solicitado:", data);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block bg-emerald-50 text-[#10B981] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-emerald-100">
            Gratis · Sin compromiso
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A8A] mb-4">
            Diagnóstico gratuito de 60 minutos
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Analizamos tus procesos y te damos{" "}
            <span className="text-[#1E3A8A] font-semibold">quick wins accionables</span>.
            Sin compromiso. Sin costo. Solo valor.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-8 sm:p-10"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Nombre completo"
                      placeholder="Ana García"
                      error={errors.nombre?.message}
                      {...register("nombre")}
                    />
                    <Field
                      label="Email profesional"
                      type="email"
                      placeholder="ana@empresa.com"
                      error={errors.email?.message}
                      {...register("email")}
                    />
                    <Field
                      label="Empresa"
                      placeholder="Acme S.L."
                      error={errors.empresa?.message}
                      {...register("empresa")}
                    />
                    <Field
                      label="Cargo"
                      placeholder="Director de Operaciones"
                      error={errors.cargo?.message}
                      {...register("cargo")}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={loading ? {} : { scale: 1.02, boxShadow: "0 12px 30px rgba(16,185,129,0.35)" }}
                    whileTap={loading ? {} : { scale: 0.98 }}
                    className="w-full bg-[#10B981] hover:bg-[#059669] disabled:opacity-70 text-white font-bold text-base py-4 rounded-xl transition-colors duration-200 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Agendar diagnóstico gratuito →"
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-gray-400">
                    Al enviar, aceptas que nos pongamos en contacto contigo para coordinar la sesión.
                    Tus datos no serán compartidos con terceros.
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="p-10 sm:p-14 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                  className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-[#10B981]" />
                </motion.div>
                <h3 className="text-2xl font-extrabold text-[#1E3A8A] mb-3">
                  ¡Solicitud recibida!
                </h3>
                <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed">
                  Nos pondremos en contacto contigo en las próximas{" "}
                  <span className="font-semibold text-gray-700">24 horas</span> para coordinar
                  tu diagnóstico gratuito de 60 minutos.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 bg-blue-50 text-[#3B82F6] text-sm font-medium px-5 py-2.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
                  Revisa tu bandeja de entrada
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  error?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  ref?: React.Ref<HTMLInputElement>;
}

const Field = ({ label, error, ...props }: FieldProps) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-semibold text-gray-700">{label}</label>
    <input
      className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 bg-gray-50 focus:bg-white focus:border-[#3B82F6] focus:ring-2 focus:ring-blue-100 ${
        error ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-gray-200"
      }`}
      {...props}
    />
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs text-red-500"
      >
        {error}
      </motion.p>
    )}
  </div>
);
