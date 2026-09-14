# Recursos visuales

Generados con la herramienta integrada de imágenes de Codex, sin API externa ni clave. Todos los recursos consumidos por la aplicación están incluidos en `public/`. Las imágenes generadas son conceptuales y el sitio las identifica como ilustrativas.

| Recurso final | Uso |
| --- | --- |
| `public/images/kiosk-hero.webp` | Render principal del tótem |
| `public/images/restaurant.webp` | Escena de aplicación en un local gastronómico |
| `public/images/burger.webp` | Fotografía de ejemplo dentro del mockup de pedidos |
| `public/images/logo-dark.webp` | Adaptación del logo suministrado para fondo oscuro |
| `public/images/og-image.jpg` | Composición social local de 1200 × 630 |
| `public/icon.png`, `public/apple-icon.png` | Isotipo original optimizado sobre fondo claro |

Los originales `public/full-logo.png` y `public/isotipo.png` se conservaron sin cambios. La edición del logo se realizó con la herramienta de imágenes; se eliminó el fondo cuadriculado y se adaptaron las partes negras a blanco. La optimización de tamaños y formatos y la composición de la imagen social utilizan Sharp. Los mockups de pedidos, ticket y administración están construidos en HTML/CSS, con contenido original y tipografía real.

## Prompts

### Render del tótem

Use case: product-mockup. Create a premium photorealistic studio product photograph for a dark industrial website for VENTA TOUCH. A single beautifully engineered slim freestanding black self-service ordering kiosk, three-quarter view facing slightly to the left, full object including sturdy rectangular floor base visible. Tall portrait touch screen with a crisp realistic warm-white restaurant ordering UI: heading 'Elegí tu próximo favorito', small orange category tabs, 2 by 2 grid of appetizing burger/fries/drink food photographs, orange checkout bottom bar. Black integrated contactless payment terminal on the lower front right, receipt printer slot and short white receipt below screen, tiny orange status light. The stand is a solid sculptural graphite metal column. A small restrained VENTA TOUCH wordmark on the column. Seamless almost-black #111111 studio background and dark floor, gentle orange light at lower right and subtle neutral rim light defining black metal edges, soft floor shadow. Composition: vertical 4:5 photograph, kiosk centered fills 85% of height, ample clearance around edges. Real physical manufacturing details, premium industrial design, elegant believable product photo, ultra sharp screen and brushed materials. No decorative floating elements, no text outside device, no people, no neon strips, no science fiction, no watermark. This is conceptual product imagery.

### Escena gastronómica

Use case: photorealistic-natural. Asset: landscape photograph for VENTA TOUCH self-service kiosk website, aspect ratio 3:2. High-end editorial architectural photo of a contemporary neighborhood burger restaurant and coffee shop in Buenos Aires. Warm oak counter, warm pendant lamps, charcoal walls, stainless espresso machine, glass kitchen pass, simple orange accents, inviting natural daylight. A sleek black freestanding portrait touchscreen self-service ordering kiosk at left foreground showing a realistic light burger menu with small food photographs, orange controls, card terminal and receipt printer. Two softly blurred adult customers and a barista in background, real lively but uncrowded local. Camera from entrance, editorial commercial photography, warm filmic color grade and authentic tactile materials. No neon, no futuristic interfaces, no store names or logos, no watermark. Beautiful balanced composition, realistic product scale. Conceptual illustrative scene.

### Producto para el menú

Use case: product-mockup. A single gourmet double smash cheeseburger with shiny golden brioche bun, two beef patties, melted cheddar, pickle slices, lettuce and tomato, on warm light cream seamless studio background, soft natural side light, editorial food photography, 3/4 front view, centered, no plate, no text, no props, square image. Appetizing real restaurant product photograph for a self-service menu mockup.

### Adaptación inicial del logo

Edit target: supplied VENTA TOUCH logo. Precise logo cleanup, do not redesign. Remove the entire baked-in gray checkerboard and watermark-like background marks. Preserve EXACT original silhouette, geometry, spacing and italic shapes of VT icon and VENTA TOUCH lettering. Change all black parts of mark and VENTA lettering to solid warm white #F5F4F1, preserve orange circle and TOUCH letters in solid vivid orange #FF6500. Create a clean sharp flat high resolution logo on genuinely transparent background with alpha, tightly cropped horizontal canvas with just a small transparent margin. No shadows, no gradients, no extra text, no checkerboard. It will be displayed at small size on a dark website.

### Corrección del fondo del logo

Fix this logo asset's BACKGROUND ONLY. The current image contains a gray CHECKERBOARD PATTERN with faint symbols; that is an unwanted real background, not transparency. REMOVE every gray checkerboard square and every background symbol by replacing the ENTIRE background uniformly with flat very dark black #111111. Keep the white VT emblem and white VENTA letters, orange dot and orange TOUCH letters exactly as they are. Crop away empty space tightly to the horizontal logo. Flat near-black background everywhere outside logo. No checkers anywhere. Output aspect ratio 5:1.

