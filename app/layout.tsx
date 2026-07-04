import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito, Baloo_2, Luckiest_Guy } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-baloo",
  display: "swap",
});

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-luckiest",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Distinción Académica — Invitación de Graduación",
  description:
    "Acompáñanos a celebrar una etapa cumplida. Ceremonia de graduación, 02 de agosto de 2026, Puebla, México.",
  openGraph: {
    title: "Distinción Académica — Invitación de Graduación",
    description:
      "Acompáñanos a celebrar una etapa cumplida. Ceremonia de graduación, 02 de agosto de 2026.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1651D6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${fredoka.variable} ${nunito.variable} ${baloo.variable} ${luckiestGuy.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}