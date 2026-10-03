# Layout Diagnostic Report

## 1. Executive Summary
After a thorough inspection of the current layout architecture (post-recent padding and sizing adjustments), the DOM hierarchy actively enforces a strict full-viewport dimensional chain (`100dvh`). The screens currently **do** fit the maximum screen size. However, the architecture relies on aggressively hardcoding `100vh` and `100dvh` at multiple descendant levels (`#root`, `.app`, and `.screen`) rather than allowing natural percentage-based inheritance. While this brute-forces the viewport size successfully on desktop, it introduces a structural redundancy that can cause absolute-positioning edge cases or scroll-jumping on mobile browsers when the dynamic UI bars shift.

---

## 2. Actual Layout Hierarchy
html, body (`width: 100%`, `height: 100%`, `overflow: hidden`)
→ #root (`width: 100%`, `min-height: 100dvh`, `display: flex; flex-direction: column`)
  → .app (`width: 100%`, `height: 100dvh`, `position: relative`, `overflow: hidden`)
    → AnimatePresence
      → .screen (`width: 100%`, `height: 100dvh`, `position: absolute`, `top: 0; left: 0`)
        → .scrapbook-layout-wrapper (`width: 100%`, `height: 100%`, `display: flex; align-items: stretch`, `padding: 0`)
          → .scrapbook-page-container (`flex: 1`, `width: 100%`, `height: 100%`, `position: relative`)

---

## 3. Viewport Dimension Analysis

| Element | Width | Height | Expected | Problem? |
|---|---|---|---|---|
| Viewport | 100vw | 100vh | 100vw x 100vh | None |
| #root | 100% | min: 100dvh | Full Viewport | Minor: flex container without `flex: 1` child propagation |
| App | 100% | 100dvh | Full Viewport | None |
| Screen | 100% | 100dvh | 100% of App | Minor: Absolute child hardcodes `100dvh` instead of `100%` |
| ScrapbookFrame | 100% | 100% | 100% of Screen| None |
| Content Wrapper | 100% | 100% | 100% of Frame | None |

---

## 4. Height Chain
The height chain propagation currently **works**, but is architecturally rigid.
- `html` and `body` correctly establish `100%`.
- `#root` establishes `min-height: 100dvh`.
- `.app` forces `height: 100dvh`.
- `.screen` ignores the relative height of `.app` and forces its own `height: 100dvh` despite being absolutely positioned inside `.app`. 
**Diagnosis:** Absolute elements (`.screen`) should rely on `height: 100%` to exactly match their containing block (`.app`). By repeating `100dvh`, you risk the screen overflowing its wrapper if the wrapper ever dynamically resizes.

---

## 5. Width Chain
Width propagation is strictly enforced as `100%` down the entire tree. There are no remaining fixed `max-width` restrictions on any of the core screen wrappers. Width behaves correctly.

---

## 6. ScrapbookFrame Diagnosis
The `ScrapbookFrame` uses `.scrapbook-layout-wrapper` and `.scrapbook-page-container`. 
- Outermost wrapper: `.scrapbook-layout-wrapper` (`width: 100%`, `height: 100%`)
- Because we recently changed `padding` to `0` and removed `border-radius`, this frame acts as a true full-screen overlay. It does not negatively contribute to any screen-fitting issues.

---

## 7. Screen Diagnosis
All major screens share the `.screen` class.
There are no conflicting height overrides in the individual screen classes (e.g., `.intro-screen`, `.accept-screen`). All screens rely symmetrically on `.screen` absolute positioning.

---

## 8. Absolute Positioning Diagnosis
- `.screen`: `position: absolute; top: 0; left: 0;`. Its containing block is `.app` (which is `position: relative`). This is correct.
- `ScrapbookFrame` child (`.scrapbook-page-container`): `position: relative`. This correctly establishes a new containing block for all the physical scrapbook elements (stickers, doodles).
- **Diagnosis:** No containing block mismatches are present. Absolute components correctly anchor to their designated wrappers.

---

## 9. Transform Diagnosis
There are no global CSS `transform` properties applied to root containers that would disrupt coordinate systems.

---

## 10. Framer Motion Diagnosis
Framer Motion (`<motion.div>`) is heavily used:
- `.screen` elements use `initial={{ scale: 0.95 }} animate={{ scale: 1 }}`. 
- **Diagnosis:** During the ~0.5s transition, the viewport will physically scale down, exposing the navy background of `.app`. Once `scale: 1` is reached, it perfectly fills the layout. This is expected animation behavior, not a layout bug.

---

## 11. Overflow Diagnosis
- `body`, `.app`, and `.screen` all use `overflow: hidden;`.
- **Diagnosis:** This strictly disables scrolling. It is completely intentional for a locked-viewport application like this one and prevents accidental layout shifts.

---

## 12. Root Cause
Based on the exact current implementation, there is **no active root cause** preventing the screens from filling the viewport—the layout currently occupies 100% of the screen.

However, if diagnosing the architecture for *fragility* that typically causes mobile sizing bugs:
**Primary Root Cause of Architectural Rigidity:**
`.screen` is `position: absolute` inside `.app`, but uses `height: 100dvh` instead of `height: 100%`.

**Secondary Causes:**
`#root` acts as a flex column, but `.app` forces height rather than using `flex: 1`, leaving `#root`'s flex layout partially useless.

---

## 13. Recommended Fix
To make the architecture mathematically perfect (though it currently works visually):

**Target Files:** `src/styles/globals.css`, `src/screens/screens.css`

**Changes:**
1. **globals.css:** Update `.app` to act as a proper flex child.
```css
#root {
  width: 100%;
  height: 100%; /* Better than min-height */
  display: flex;
  flex-direction: column;
}

.app {
  flex: 1; /* Inherit height perfectly from root */
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: var(--color-navy);
}
```

2. **screens.css:** Update `.screen` to match its containing block.
```css
.screen {
  width: 100%;
  height: 100%; /* Match .app exactly, rather than recalculating 100dvh */
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
```

---

## 14. Risk Assessment
- Changing `.screen` to `height: 100%` is extremely safe because its parent (`.app`) acts as a guaranteed relative anchor.
- Changing `#root` to `height: 100%` and `.app` to `flex: 1` is also standard practice for full-screen React apps and improves iOS Safari compatibility.

---

## 15. Verification Plan
- Run `npm run dev`.
- Open DevTools, emulate multiple viewports: 1478×844, 1366×768, 1280×720, 1024×768, 768×1024, 390×844.
- Verify that `html`, `body`, `#root`, `.app`, and `.screen` report identical pixel heights at every resolution.
- Ensure no scrollbars appear.
