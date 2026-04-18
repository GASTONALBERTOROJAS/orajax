import Hero from "@/components/Hero";
import ProblemasSoluciones from "@/components/ProblemasSoluciones";
import Proceso from "@/components/Proceso";
import SolucionesCore from "@/components/SolucionesCore";
import SobreOrajax from "@/components/SobreOrajax";
import Credibilidad from "@/components/Credibilidad";
import CTAFormulario from "@/components/CTAFormulario";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      {/* Hero — white */}
      <Hero />

      {/* white → gray-50 */}
      <WaveDivider fromColor="#ffffff" toColor="#f9fafb" />

      {/* Problemas — gray-50 */}
      <ProblemasSoluciones />

      {/* gray-50 → white */}
      <WaveDivider fromColor="#f9fafb" toColor="#ffffff" />

      {/* Proceso — white */}
      <Proceso />

      {/* white → gray-50 */}
      <WaveDivider fromColor="#ffffff" toColor="#f9fafb" />

      {/* Soluciones — gray-50 */}
      <SolucionesCore />

      {/* gray-50 → white */}
      <WaveDivider fromColor="#f9fafb" toColor="#ffffff" />

      {/* Sobre — white */}
      <SobreOrajax />

      {/* white → dark */}
      <WaveDivider fromColor="#f9fafb" toColor="#0F2554" />

      {/* Credibilidad — dark blue */}
      <Credibilidad />

      {/* dark → light blue */}
      <WaveDivider fromColor="#0F2554" toColor="#eff6ff" />

      {/* CTA — light blue */}
      <CTAFormulario />

      {/* light → dark footer */}
      <Footer />
    </main>
  );
}
