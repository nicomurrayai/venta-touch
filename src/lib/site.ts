export const siteTitle = "VENTA TOUCH | Tótems de autoservicio para tu negocio";
export const siteDescription = "Automatizá pedidos, ventas y cobros con VENTA TOUCH. Tótems con hardware, software, pagos, instalación y soporte. Pedí tu propuesta a medida por WhatsApp.";

export function getSiteUrl(): URL | undefined {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) return undefined;
  const url = new URL(configured);
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) {
    throw new Error("NEXT_PUBLIC_SITE_URL debe ser una URL pública http o https sin credenciales.");
  }
  return new URL(url.origin);
}
