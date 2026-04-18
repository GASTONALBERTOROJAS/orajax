import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Orajax | Datos que mejoran tus procesos",
  description:
    "Consultoría senior de operaciones y datos para pymes e industriales. Automatizamos procesos, integramos sistemas y transformamos datos en resultados reales.",
  keywords: ["consultoría datos", "automatización procesos", "integración sistemas", "transformación digital", "pymes", "operaciones"],
  openGraph: {
    title: "Orajax | Datos que mejoran tus procesos",
    description: "Automatizamos operaciones, integramos sistemas, transformamos resultados.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
