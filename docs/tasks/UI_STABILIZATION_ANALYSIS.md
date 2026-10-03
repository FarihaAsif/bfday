# UI Stabilization & Interaction Fix Analysis

## A. Current layout architecture
- **Viewport container:** The `body` and `#root` elements represent the viewport container. In `App.tsx`, there is a `<div className="app">` wrapper, but it currently lacks any styling.
- **Scrapbook coordinate system:** The base `.screen` class (in `screens.css`) uses `position: absolute; top: 0; left: 0; width: 100%; height: 100vh; overflow: hidden;`. This means each screen defines its own coordinate system relative to the closest positioned ancestor (which currently falls back to `body` or `#root`).
- **Scrapbook frame:** Most screens wrap their content in a `<ScrapbookFrame>` component, which renders a `.scrapbook-layout-wrapper` (using flex for centering) and a `.scrapbook-page-container` (the cream paper background, `position: relative`, max sizes).
- **Absolute positioning issues:** Several objects (e.g., doodles, tape, handwritten notes) use `position: absolute` via inline styles or CSS classes. Because `transform`s or intermediate containers sometimes lack `position: relative`, these children often collapse to the nearest positioned parent, which causes the "top-left clustering" seen on Choose Gifts, Accept, and Bouquet screens. 
- **Framer Motion transforms:** We use `initial` and `animate` heavily, which applies `transform`. If an element relies on `position: absolute` but is wrapped inside a `motion.div` without explicit positional logic, it can collapse depending on layout flow. Furthermore, animating `transform` on the layout container itself breaks absolute positioning for its children.

## B. Interaction architecture
- **State machine:** Resides in `App.tsx` using a simple `useState<Screen>` mapped to 'INTRO', 'ACCEPT_GIFT', 'SAD_RESPONSE', 'CHOOSE_GIFTS', 'LETTER', 'BOUQUET', 'FINAL_GIFT'.
- **Transitions:** Handled by `<AnimatePresence mode="wait">`. The "blank screen" bug occurs because `mode="wait"` waits for the exit animation of the current screen to finish before starting the enter animation of the next screen. However, because `.screen` is `position: absolute`, the document flow height becomes 0 or elements exit too fast, leaving a dark navy screen (the `body` background color).
- **Clickable elements:**
  - `AcceptGiftScreen`: YES (CHOOSE_GIFTS), NO (SAD_RESPONSE)
  - `SadResponseScreen`: TRY AGAIN (ACCEPT_GIFT)
  - `ChooseGiftsScreen`: Envelope (LETTER), Bouquet (BOUQUET), GiftBox (FINAL_GIFT)
  - `LetterScreen`: Back (CHOOSE_GIFTS)
  - `BouquetScreen`: Animated sequence calling `onComplete` automatically.
  - `FinalGiftScreen`: Final card flips open.

## C. Regression diagnosis
- **Top-left clustering (Choose Gifts):** `.gifts-row` is lacking `display: flex` and centering. The individual `gift-wrapper` motion divs use absolute positioning for their internal decorations (arrows, text) but the wrapper itself might lack `position: relative` or structure.
- **Incorrect rotations/scaling:** Using Framer Motion for layout rotation alongside CSS transforms caused scaling conflicts. 
- **Blank transition screens:** `<AnimatePresence mode="wait">` combined with `.screen { position: absolute }` and long duration exits (e.g. 0.8s opacity fade) leaves the navy background exposed.
- **Incorrect click areas:** Doodles and tape elements often overlay buttons or gifts. Currently, `Doodle` has `pointer-events: none; z-index: 12`, but `WashiTape` and `HandwrittenNote` lack `pointer-events: none`, meaning they can block clicks on the underlying items.
- **Bouquet screen pushed left:** The animated bouquet `scale: 4, rotate: -150, x: '-20%', y: '-10%'` permanently modifies the transform of the `img`, pushing it out of composition while scaling up. 

## Action Plan
1. **Fix `App.tsx` Coordinate System:** Give `.app` explicit `position: relative; width: 100vw; height: 100vh; overflow: hidden;`.
2. **Fix Transitions:** Ensure exit animations are shorter, or remove `mode="wait"` to allow crossfading, preventing the blank dark screen.
3. **Fix Hitboxes:** Add `pointer-events: none` to `WashiTape` and `HandwrittenNote`. Ensure interactive elements have `z-index: 10` or higher.
4. **Fix Choose Gifts:** Convert `.gifts-row` to a robust flex/grid layout so the three items spread out cleanly and don't clump in the top left.
5. **Fix Bouquet:** Separate the bouquet image layout wrapper from the motion animation wrapper.
6. **Fix Accept/Sad:** Ensure flex layouts correctly center the content and don't let absolute doodles disrupt the flow.
