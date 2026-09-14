# VENTA TOUCH

Landing comercial de tótems de autoservicio. Next.js App Router, React, TypeScript y Tailwind CSS. La página se genera estáticamente y todos los CTA comerciales abren el WhatsApp solicitado.

## Ejecutar

Requiere Node.js 22 o superior (verificado con Node.js 24) y npm.

```sh
npm ci
npm run dev
```

Abrir http://localhost:3000. Para revisar producción local:

```sh
npm run build
npm run start
```

## Verificar

```sh
npm run lint
npm run typecheck
npm run build
```

La compilación inicial necesita acceso a Google Fonts. `next/font` descarga Barlow Condensed y Manrope y las aloja con la aplicación: los visitantes no hacen solicitudes a Google Fonts.

Los resultados de las verificaciones funcionales, visuales, de accesibilidad y Lighthouse se documentan en `docs/verification.md`.

## Desplegar en Vercel

1. Subir este proyecto a un repositorio e importarlo en Vercel.
2. Elegir el preset **Next.js** y Node.js **24.x**. Vercel detecta `npm run build` automáticamente; no es necesario configurar un directorio de salida.
3. Definir `NEXT_PUBLIC_SITE_URL` con el origen público definitivo, incluido `https://` y sin rutas adicionales.
4. Desplegar y conectar el dominio. Si cambiás esta variable, volver a desplegar para regenerar la metadata estática.
5. Verificar el destino de WhatsApp, la imagen social, `/robots.txt` y `/sitemap.xml` en el dominio público.

No necesita base de datos, backend comercial, credenciales ni servicios pagos para funcionar. Este trabajo no publica el sitio ni configura un dominio.

## Configuración comercial

- `src/lib/content.ts`: URL de WhatsApp, teléfono, navegación, beneficios, pasos, rubros y preguntas frecuentes.
- `src/app/page.tsx`: composición y titulares de las secciones.
- `src/lib/site.ts`: título SEO, descripción y validación del dominio.
- `src/app/globals.css`: sistema visual, breakpoints y movimiento reducido.
- `public/images`: recursos optimizados del sitio. Los originales `public/full-logo.png` y `public/isotipo.png` permanecen intactos.

Todos los CTA comerciales usan `WHATSAPP_URL`, incluyendo cabecera, menú móvil, hero, software, FAQ, cierre, pie y botón flotante. Los enlaces internos secundarios solo desplazan a la sección correspondiente. Los atributos `data-cta` identifican la ubicación del enlace para una futura integración de analítica; no se envían eventos ni se incluyen rastreadores actualmente.

## SEO y dominio

Copiar `.env.example` a `.env.local` para desarrollo si se quiere probar el dominio definitivo. Sin `NEXT_PUBLIC_SITE_URL`, se omite el canonical y el sitemap no contiene URLs. Para las imágenes sociales se utiliza el host de preview de Vercel cuando está disponible o localhost en desarrollo. Nunca se inventa un dominio comercial.

La página incluye metadata Open Graph y Twitter, imagen social de 1200 × 630, `lang="es-AR"`, favicon y datos estructurados de organización con la información confirmada. Las rutas de SEO se generan durante el build.

## Recursos y alcance

Los renders, la escena de restaurante, la fotografía del producto y los mockups son ilustrativos. No constituyen especificaciones del equipo o promesas sobre integraciones, precios, disponibilidad, tiempos de instalación o resultados.

`docs/assets.md` documenta los prompts y el método de generación. `scripts/prepare-assets.mjs` permite repetir la optimización si se dispone de los archivos de generación originales; no es necesario para ejecutar, compilar o desplegar, ya que todos los recursos finales están incluidos.

El menú móvil soporta Escape, cierre al navegar y clic externo. Las FAQ usan `details/summary` nativos. El contenido es visible sin JavaScript y las animaciones respetan `prefers-reduced-motion`. Las ilustraciones de software no son aplicaciones funcionales ni formularios de compra.
