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
      <Hero />
      <WaveDivider fromColor="#ffffff" toColor="#f9fafb" />
      <ProblemasSoluciones />
      <WaveDivider fromColor="#f9fafb" toColor="#ffffff" />
      <Proceso />
      <WaveDivider fromColor="#ffffff" toColor="#f9fafb" />
      <SolucionesCore />
      <WaveDivider fromColor="#f9fafb" toColor="#ffffff" />
      <SobreOrajax />
      <WaveDivider fromColor="#ffffff" toColor="#0F2554" />
      <Credibilidad />
      <WaveDivider fromColor="#0F2554" toColor="#eff6ff" />
      <CTAFormulario />
      <Footer />
    </main>
  );
}
