# Verificación — VENTA TOUCH

Verificación local de producción realizada el 13 de septiembre de 2026, con Node.js 24, Next.js 16.3.5 y Chrome, en Windows.

## Código y compilación

- `npm run build`: correcto; página principal, robots y sitemap generados estáticamente.
- `npm run typecheck`: correcto.
- `npm run lint`: correcto, sin errores ni advertencias.
- Se mantiene ESLint 9.39.5 por compatibilidad con el plugin React incluido por `eslint-config-next`; la prueba con ESLint 10 detectó incompatibilidad en ese plugin. npm puede mostrar un aviso de fin de soporte de ESLint 9 al instalar. No afecta al código que recibe el visitante.

## Funcionalidad y responsive

- Anchos de **360, 390, 768, 1280 y 1440 px**: sin desbordamiento horizontal, sin errores de imágenes y con WhatsApp flotante dentro del viewport.
- **8 enlaces comerciales**: todos coinciden exactamente con la URL y el mensaje de WhatsApp solicitados, incluidos los enlaces de la navegación móvil.
- **15 enlaces internos**: todos tienen un destino válido.
- Menú móvil: apertura, cierre con Escape, devolución de foco al botón, cierre al navegar y cierre por clic externo correctos.
- FAQ: apertura, cierre del elemento anterior y activación con Enter correctos.
- El enlace para saltar al contenido es el primer destino del teclado.
- Movimiento reducido: todo el contenido permanece visible, sin transiciones.
- Sin JavaScript: titular, CTA y contenido visibles; las FAQ nativas funcionan.

## Accesibilidad

Auditoría axe con reglas WCAG 2 A, AA y WCAG 2.1 AA: **cero infracciones detectadas** en móvil y escritorio. Se corrigieron los contrastes de las etiquetas pequeñas de los mockups. Este resultado automatizado se complementó con las comprobaciones de teclado y la inspección visual.

## Lighthouse

| Categoría | Móvil | Escritorio |
| --- | ---: | ---: |
| Rendimiento | 93 | 100 |
| Accesibilidad | 100 | 100 |
| Buenas prácticas | 100 | 100 |
| SEO | 100 | 100 |

| Métrica | Móvil | Escritorio |
| --- | ---: | ---: |
| First Contentful Paint | 1,0 s | 0,3 s |
| Largest Contentful Paint | 2,9 s | 0,7 s |
| Total Blocking Time | 160 ms | 0 ms |
| Cumulative Layout Shift | 0 | 0 |

Son mediciones de laboratorio sobre `next start` en localhost, con los perfiles de Lighthouse. El LCP móvil de 2,9 s está por encima del umbral de 2,5 s para la categoría buena. Se debe volver a medir en el dominio público con la CDN de Vercel; no son datos de campo ni garantizan resultados de Core Web Vitals. El INP requiere interacciones y mediciones de uso real.

Lighthouse móvil generó los informes correctamente, pero Windows devolvió un error de permisos al limpiar su perfil temporal de Chrome al terminar. No hubo error de carga o medición del sitio. La ejecución de escritorio terminó normalmente.

Informes HTML y JSON, scripts de comprobación y capturas locales: `output/playwright/` (excluido de Git). Para repetir Lighthouse después de iniciar producción:

```sh
npx lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-mobile.html --chrome-flags="--headless"
npx lighthouse http://localhost:3000 --preset=desktop --output=html --output-path=./lighthouse-desktop.html --chrome-flags="--headless"
```

## SEO y recursos

- Documento `es-AR`, un único H1, descripción, Open Graph, Twitter y JSON-LD de organización presentes.
- `/robots.txt`, `/sitemap.xml`, imagen social y favicon responden HTTP 200.
- Sin dominio configurado, no hay canonical y el sitemap no publica URLs inventadas.
- Render principal: aproximadamente **63 KiB**; escena de restaurante: **119 KiB**; foto de producto: **44 KiB**; logo: **10 KiB**. `next/image` entrega variantes según el viewport.
- Fuentes alojadas por la aplicación, imagen principal con carga inmediata y prioridad alta, imágenes secundarias diferidas.

## Antes de publicar

Configurar `NEXT_PUBLIC_SITE_URL` con el dominio real y reconstruir. Revisar canonical, sitemap y vista previa social en ese dominio. Sustituir los recursos ilustrativos por fotografías y capturas reales si se dispone de ellas. La publicación en Vercel no forma parte de esta entrega.
