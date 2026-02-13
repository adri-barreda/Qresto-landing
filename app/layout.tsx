import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Qresto — Tu carta en WhatsApp. Así de simple.",
  description: "Sistema de QR + WhatsApp para restaurantes. Tu cliente escanea, tu carta responde. Dashboard, bot IA, carta online y más.",
  openGraph: {
    title: "Qresto — Tu carta en WhatsApp",
    description: "Sistema de QR + WhatsApp para restaurantes. Sin app, sin descargas, sin complicaciones.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${display.variable} ${body.variable} font-body bg-void text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
