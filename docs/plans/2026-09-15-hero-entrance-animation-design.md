# Hero entrance animation design

## Objective

Add a fluid, premium entrance to the hero while keeping the content immediately understandable and the primary action easy to reach.

## Approved design

- Use a subtle editorial sequence: eyebrow, title, description, actions, and supporting note enter with a short stagger.
- Bring the product visual in alongside the copy with a soft fade, a small upward movement, and minimal scale correction.
- Reveal the orbit and visual index as secondary details so they support, rather than compete with, the kiosk.
- Keep the full sequence near 1.2 seconds with restrained travel distances and a smooth deceleration curve.
- Shorten movement and timing on small screens so the entrance remains responsive.
- Do not add an animation dependency or delay image loading.
- Disable all entrance motion when `prefers-reduced-motion: reduce` is active.

## Implementation and verification

The hero markup will expose its major copy groups as animation targets. CSS keyframes and stagger variables will drive the sequence, with the existing reduced-motion media query providing the accessibility fallback. Verify lint, types, production build, and the hero at desktop and mobile widths.
