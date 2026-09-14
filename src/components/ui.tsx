import Image from "next/image";
import { Icon, WhatsAppIcon } from "./icons";
import { WHATSAPP_URL } from "@/lib/content";

export function Logo({ footer = false }: { footer?: boolean }) {
  return <a href="#inicio" className={`brand${footer ? " brand-footer" : ""}`} aria-label="VENTA TOUCH — inicio"><Image src="/images/logo-dark.webp" alt="VENTA TOUCH" width={480} height={72} sizes={footer ? "220px" : "190px"} preload={!footer} /></a>;
}

export function WhatsAppCTA({ children, variant = "primary", className = "", location }: { children: React.ReactNode; variant?: "primary" | "outline" | "dark"; className?: string; location: string }) {
  return <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`button button-${variant} ${className}`} data-cta={location}><span>{children}</span><Icon name="diagonal" size={19} /></a>;
}

export function FloatingWhatsApp() {
  return <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Consultar por WhatsApp (abre una nueva pestaña)" data-cta="floating"><span className="floating-label">Hablemos de tu negocio</span><WhatsAppIcon size={29}/></a>;
}

export function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`section-label${light ? " label-dark" : ""}`}><span aria-hidden="true" />{children}</p>;
}
