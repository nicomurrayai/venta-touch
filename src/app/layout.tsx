import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import { getSiteUrl, siteDescription, siteTitle } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-barlow", display: "swap" });
const siteUrl = getSiteUrl();
// Preview URLs are used only for social assets, never as the canonical production domain.
const socialBase = siteUrl ?? new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: socialBase,
  title: siteTitle,
  description: siteDescription,
  applicationName: "VENTA TOUCH",
  alternates: siteUrl ? { canonical: siteUrl.href } : undefined,
  robots: { index: true, follow: true },
  openGraph: { title: siteTitle, description: siteDescription, type: "website", locale: "es_AR", siteName: "VENTA TOUCH", url: siteUrl?.href, images: [{ url: siteUrl ? new URL("/images/og-image.jpg", siteUrl).href : "/images/og-image.jpg", width: 1200, height: 630, alt: "VENTA TOUCH — Tu próximo punto de venta es TOUCH" }] },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescription, images: [siteUrl ? new URL("/images/og-image.jpg", siteUrl).href : "/images/og-image.jpg"] },
  icons: { icon: [{ url: "/icon.png", type: "image/png", sizes: "64x64" }], apple: [{ url: "/apple-icon.png", sizes: "180x180" }] },
};

export const viewport: Viewport = { themeColor: "#111111", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-AR" className={`${manrope.variable} ${barlow.variable}`}><body>{children}</body></html>;
}
