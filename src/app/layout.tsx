import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ScrollToTop from "@/components/ui/ScrollToTop";
import "./globals.css";
import GridBackground from "@/components/ui/GridBackground";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Malak Mestini - Supply Chain Management Student",
  description: "Portfolio de Malak Mestini, étudiante en génie industriel spécialisée en Supply Chain Management à l'ENSA Tétouan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <ScrollToTop />
        <GridBackground variant="gradient" gridSize={30} gridOpacity={0.05} />
        <div className="relative z-10">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
