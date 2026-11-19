import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LanchesPrime | Sabor em cada detalhe",
  description: "Conheça o LanchesPrime: uma experiência demonstrativa de gastronomia casual.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
