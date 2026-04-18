import Hero from "@/components/Hero";
import ProblemasSoluciones from "@/components/ProblemasSoluciones";
import SolucionesCore from "@/components/SolucionesCore";
import Credibilidad from "@/components/Credibilidad";
import CTAFormulario from "@/components/CTAFormulario";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <ProblemasSoluciones />
      <SolucionesCore />
      <Credibilidad />
      <CTAFormulario />
      <Footer />
    </main>
  );
}
