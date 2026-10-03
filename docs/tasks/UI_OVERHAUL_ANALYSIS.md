# UI Overhaul Analysis

## 1. What currently looks too much like a website
- **The Frame**: `ScrapbookFrame` relies on a CSS border (`border: 12px solid var(--color-navy)`) which feels rigid and digital, locking content inside a strict box rather than feeling like an edge of a scrapbook page.
- **Centering & Flexbox**: Excessive use of `justify-content: center; align-items: center` makes layouts (like the Intro, Accept Gift, and Gift Selection) feel like standard web applications.
- **Buttons**: `PrimaryButton` uses a standard pill shape with flat colors and CSS hover states, feeling like standard SaaS UI rather than physical scrapbook elements (stickers, cutouts, or labels).
- **Background Textures**: The graph-paper background is a CSS linear-gradient, which is mathematically perfect. There is no subtle paper grain or imperfection.
- **Shadows**: Shadows (`box-shadow: 0 4px 12px rgba(0,0,0,0.15)`) are uniform drop shadows rather than varied, realistic contact shadows.
- **Placeholders**: The placeholder SVGs have raw text ("Photo 1", "Cute Character") and no scrapbook aesthetic, appearing as generic dummy boxes.

## 2. What needs to become more scrapbook-like
- **Depth & Layering**: We need a clear Z-index hierarchy where objects genuinely overlap (e.g., tape overlapping photos, photos overlapping paper, stickers overlapping tape).
- **Materiality**: Everything should feel like paper, cardboard, tape, or ink. We need noise overlays or SVG filters to simulate paper grain.
- **Imperfection**: Rotations should be varied. Edges should be torn or irregular (using SVG clip-paths with uneven points or CSS `mask-image`).
- **Asymmetry**: Elements should be offset, overlapping the frame, or clustered intentionally rather than evenly distributed.
- **Handwritten Notes**: We need tiny decorative annotations sprinkled throughout the pages to sell the "handmade memory book" feel.

## 3. Which components can be improved
- `ScrapbookFrame`: Needs to drop the solid CSS border and use layered, irregular paper borders, patterned tape, or overlapping elements that break the bounding box.
- `PrimaryButton`: Needs to become a `ScrapbookButton` or `StickerButton` with irregular edges, subtle paper textures, and slight default rotations.
- `PolaroidPhoto`: Needs a more realistic paper shadow, a subtle warm tint, and realistic Washi tape.
- `GiftItem`: Needs to feel like physical cutouts or cards pasted onto the page.
- `MusicPlayer`: Needs to transform from a flexbox pill into a physical card or label taped to the page.

## 4. New reusable scrapbook primitives needed
- `<ScrapbookPaper />`: A container with subtle grain, irregular edges, and realistic drop shadow.
- `<WashiTape />`: A decorative tape component with opacity, pattern, and torn edges to visually stick elements together.
- `<HandwrittenNote />`: A small text component using the Caveat font, maybe with an underline or doodle, rotated slightly.
- `<Sticker />`: A decorative graphic or button with a white outline and a drop shadow.
- `<Doodle />`: SVG hand-drawn elements (hearts, stars, arrows, sparkles) with slight imperfections.
- `<TornEdge />`: A visual treatment for paper components.

## 5. Existing screens needing restructuring
- **Intro**: Shift from a centered stack to a layered collage. The title should be a large paper cutout. Add taped elements and scattered doodles.
- **Accept/Sad**: Break the vertical symmetry. Position the character off-center. Add handwritten reactions ("please?", "really?!"). Make the YES/NO buttons look like stickers or paper scraps.
- **Choose Gifts**: Arrange the envelope, bouquet, and gift box as overlapping physical items on a desk/page. Use washi tape and handwritten labels.
- **Letter**: Make the central paper look genuinely torn and textured. Overlap the polaroids *onto* the letter edges, taped down. Add doodles in the margins.
- **Bouquet**: Make the romantic text look like a physical note card. Add floral scraps or tape holding the illustration.
- **Final Gift**: The vinyl and card should look like physical items pasted to the page. The music player needs to be a scrapbook label.

## 6. Broken/Generic placeholder assets needing fixing
- Currently, placeholders are generated via a Node script as generic SVGs.
- I will replace the script to generate aesthetic scrapbook placeholders (e.g., a "Photo Placeholder" that looks like a sketched landscape, an "Envelope" that looks like folded paper, etc.) or just use CSS/SVG inline to render beautiful physical placeholders if external images aren't available.

## Implementation Plan
- **Phase 1**: Update `globals.css` with noise/texture classes and realistic shadows.
- **Phase 2 & 3**: Build the new scrapbook primitives (`WashiTape`, `ScrapbookPaper`, `StickerButton`, `HandwrittenNote`, `Doodle`). Upgrade `PolaroidPhoto`.
- **Phase 4-9**: Rebuild each screen using the new primitives, breaking symmetry and injecting handmade details.
- **Phase 10**: QA and polish animations.
