"use client";

import { useEffect, useRef, useState } from "react";
import { navigation, WHATSAPP_URL } from "@/lib/content";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); }
    };
    const pointerdown = (event: PointerEvent) => {
      if (event.target instanceof Node && !container.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("keydown", keydown);
    document.addEventListener("pointerdown", pointerdown);
    return () => { document.removeEventListener("keydown", keydown); document.removeEventListener("pointerdown", pointerdown); };
  }, [open]);

  return <div className="mobile-nav" ref={container} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <button className="menu-toggle" type="button" ref={trigger} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>{open ? <X size={22} strokeWidth={1.6} aria-hidden="true"/> : <Menu size={22} strokeWidth={1.6} aria-hidden="true"/>}</button>
    <nav id="mobile-navigation" className="mobile-panel" aria-label="Navegación móvil" hidden={!open}>
      {navigation.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={17} aria-hidden="true"/></a>)}
      <a href={WHATSAPP_URL} className="mobile-cta" target="_blank" rel="noopener noreferrer" data-cta="mobile-header" onClick={() => setOpen(false)}>Cotizar mi solución <ArrowUpRight size={17} aria-hidden="true"/></a>
    </nav>
  </div>;
}
