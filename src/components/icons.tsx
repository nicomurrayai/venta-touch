import { ArrowDown, ArrowRight, ArrowUpRight, Check, CheckCheck, ChevronDown, Clock3, Coffee, CreditCard, Headphones, Layers3, Menu, Monitor, MousePointer2, Plus, Printer, Settings2, ShieldCheck, ShoppingBag, Store, Users, Utensils, X } from "lucide-react";

const icons = {
  arrow: ArrowRight, diagonal: ArrowUpRight, down: ArrowDown, check: Check,
  checks: CheckCheck, chevron: ChevronDown, clock: Clock3, coffee: Coffee,
  card: CreditCard, support: Headphones, layers: Layers3, menu: Menu,
  monitor: Monitor, touch: MousePointer2, plus: Plus, printer: Printer,
  settings: Settings2, shield: ShieldCheck, bag: ShoppingBag, store: Store,
  people: Users, burger: Utensils, close: X,
};

export function Icon({ name, size = 22, className = "" }: { name: string; size?: number; className?: string }) {
  const Component = icons[name as keyof typeof icons] ?? icons.check;
  return <Component size={size} strokeWidth={1.6} className={className} aria-hidden="true" />;
}

export function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.5 11.6a8.5 8.5 0 0 1-12.65 7.43L3 20.5l1.44-4.75A8.5 8.5 0 1 1 20.5 11.6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="m8.35 7.3 1.15 2.15-.87 1.05c.67 1.53 1.7 2.55 3.23 3.22l1.04-.88 2.2 1.15c.28.15.4.48.3.77-.4 1.2-1.2 1.67-2.35 1.37-3.51-.93-5.9-3.33-6.72-6.56-.28-1.1.23-1.88 1.28-2.52.26-.16.59-.04.74.25Z" fill="currentColor"/></svg>;
}
