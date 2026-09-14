# Hero cleanup design

## Objective

Simplify the hero visual so the product image is not covered by supplementary callouts or a caption, and align its primary action with the broader automation message.

## Approved design

- Remove the two floating product callouts from the hero image.
- Remove the image caption, `Render conceptual · Configuración a medida`.
- Change the hero CTA label to `Quiero automatizar mis ventas`.
- Keep the CTA's label white to preserve contrast against its orange background.

## Implementation and verification

The change is limited to the hero markup, centralized CTA content, and the CTA color rule if needed. Verify the production build and confirm that the removed text no longer appears in the hero while the CTA remains legible.
