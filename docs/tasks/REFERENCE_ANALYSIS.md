# Reference Video Analysis

**Source:** `reference/referencevideo.mp4`
**Resolution:** 882 × 480 (recorded)
**Frame rate:** 60 FPS
**Duration:** 16.77 seconds
**Extracted frames:** `reference/frames/frame_*.png` (34 frames at 0.5s intervals)

> **IMPORTANT:** The video contains social-media platform UI (Likes, comment icon, share icons, counters — visible on the right edge). This platform UI is NOT part of the website and must NOT be reproduced.

---

## Screen States

### State 1: INTRO (0.0s)

**Timestamp:** 0.0s
**Screen name:** Intro / Landing

**Background:**
- Deep navy blue textured background (denim/fabric texture feel)
- Scrapbook paper aesthetic — not a flat color

**Heading:**
```
HAPPY
BOYFRIEND'S
♥ DAY ♥
```
- Large, bold, decorative serif/retro typography
- Cream/gold/off-white text color with slight 3D/embossed look
- Hearts (♥) flanking "DAY" are white/cream
- Text is centered horizontally
- Text occupies approximately the upper 60% of the viewport

**Decorative elements:**
- TOP-LEFT: Large filled blue star (stitched/quilted appearance with lighter blue shading)
- LOWER-LEFT: Second large blue star, partially cut off at bottom
- LOWER-LEFT: Retro camera/viewfinder decorative sticker (black with red heart accent and lens detail)
- TOP-RIGHT: Dark blue star (partially behind platform UI)
- TOP-RIGHT: White/outline star overlapping the filled star
- TOP-RIGHT CORNER: Small partial image (looks like a page/paper corner)
- BOTTOM-CENTER: Small golden sparkle/star decorations
- Overall: scattered small decorative elements

**Button (CTA):**
- Text: `CONTINUE`
- Shape: Pill/rounded rectangle
- Color: Light cream/off-white body
- Border: Subtle blue/navy outline
- Position: Horizontally centered, lower portion of screen
- Small decorative icon to the left of text (appears to be a small ribbon/bow icon)
- Width: approximately 30% of viewport width

**Interactions:**
- Click CONTINUE → transitions to ACCEPT_GIFT screen

---

### State 2: ACCEPT GIFT (0.5s – 2.0s)

**Timestamp:** 0.5s – 2.0s (and again at 4.0s – 4.5s after TRY AGAIN)
**Screen name:** Accept Gift

**Background:**
- Cream/off-white graph-paper texture
- Subtle grid lines visible (pale green/cream colored grid)

**Scrapbook Frame:**
- Navy/dark blue irregular border around the entire page
- LEFT SIDE: Thick dark blue scrapbook border with checkered/plaid pattern (blue and lighter blue stripes)
- TOP-LEFT CORNER: Large dark blue filled star overlapping the border
- TOP-RIGHT CORNER: Curvy/swirl blue decorative element
- RIGHT SIDE: Dark blue spider web / decorative web element
- BOTTOM-RIGHT CORNER: Silver/metallic decorative star element
- BOTTOM-LEFT CORNER: Blue curved border continuation
- Overall frame has an irregular/hand-drawn quality, not perfectly rectangular

**Heading:**
```
PLEASE ACCEPT THE GIFT
```
- Bold, black, sans-serif or display font
- Centered at the top of the content area
- All uppercase

**Illustration (center):**
- Cute kawaii-style white/pale ghost-like character
- Large glossy dark eyes (maroon/dark burgundy) with light reflections
- Small round pale body
- Small outstretched arms
- Pink/rosy cheeks (blush accents)
- Black outline drawing style
- Positioned center of the frame, taking up about 30-40% of vertical space

**Confetti/sparkles:**
- Small colorful confetti particles scattered across the background
- Visible as tiny colored dots/shapes (red, green, yellow, blue)

**Buttons:**
- Two side-by-side red rounded buttons
- Left: `YES` — muted/dark red, rounded pill shape
- Right: `NO` — muted/dark red, rounded pill shape
- Both positioned below the character, horizontally centered
- Text is white/light colored
- Buttons are approximately same size

**Interactions:**
- YES → CHOOSE_GIFTS
- NO → SAD_RESPONSE

---

### State 3: SAD RESPONSE (2.5s – 3.5s)

**Timestamp:** 2.5s – 3.5s
**Screen name:** Sad Response / Why Did You Click No

**Background:**
- Same cream graph-paper as Accept Gift
- Same scrapbook frame (reusable component)

**Heading:**
```
WHY DID YOU CLICK NO!
```
- Bold, black, display font
- All uppercase
- Centered at top
- Exclamation mark, no question mark

**Illustration (center):**
- Crying version of the cute character
- Large glossy watery dark eyes (darker, more teary)
- Visible tears streaming down face
- Sad/worried expression
- Sitting in a light blue puddle of tears beneath the character
- The puddle has irregular edges, spreading out
- Same cute hand-drawn kawaii style

**Button:**
- `TRY AGAIN` — single dark red rounded pill button
- White text
- Centered below the character
- Smaller than the YES/NO buttons

**Interactions:**
- TRY AGAIN → ACCEPT_GIFT

---

### State 4: CHOOSE YOUR GIFTS (5.0s – 5.5s, 8.5s, 12.5s – 13.0s)

**Timestamp:** 5.0s – 5.5s (first appearance)
**Screen name:** Gift Selection

**Background:**
- Cream graph-paper
- Same scrapbook frame as other inner pages

**Heading:**
```
Choose Your Gifts
```
- Black, serif/display font
- Mixed case (not all caps)
- Centered at top of content area

**Gift Objects:**

**LEFT — Blue Envelope:**
- Dark navy blue envelope (main body)
- Lighter cream/tan paper/card partially visible behind/above the envelope (sticking out from the envelope)
- Heart seal/stamp on the envelope flap (dark blue heart)
- Positioned in the left ~30% of the viewport
- Slightly rotated (~-5° to -10°)
- Paper shadow beneath

**CENTER — White Flower Bouquet:**
- Bouquet of white tulip-like flowers
- Wrapped in dark/black paper wrapping
- Tied with a dark navy blue ribbon bow
- Green stems visible below the ribbon
- Largest object — central focus
- Positioned center, taking up significant vertical space
- Slight tilt

**RIGHT — Gift Box:**
- Dark navy blue wrapped gift box
- Blue ribbon and bow on top
- Positioned in right ~25% of the viewport (partially cut off by platform UI)
- Subtle shadow
- Slightly rotated (~5°)

**Decorative elements:**
- Same frame decorations as other inner screens
- Stars, swirls, plaid border elements visible

**Interactions:**
- Click Envelope → LETTER
- Click Bouquet → BOUQUET_EXPERIENCE
- Click Gift Box → FINAL_GIFT

---

### State 5: LETTER (6.0s – 8.0s)

**Timestamp:** 6.0s – 8.0s
**Screen name:** Letter / Personal Message

**Background:**
- Cream graph-paper with scrapbook frame
- Deep blue border with stars and decorative elements

**Layout:**
- Central large letter paper
- Four Polaroid photos at corners

**Letter Paper:**
- Large cream/tan/aged paper
- Takes up approximately the center 50% width
- Handwritten-style body text
- Dark brown/black ink color
- Slightly irregular paper edges (not perfectly rectangular)

**Letter Content (visible in reference):**
```
Heyy Babyyyy! ❤️
Happy Boyfriend's Day to the besttt boyfriend in
the whole world! 😊 ❤️ I love how you're the
sweetest, hottest, and calmest person I've ever
known. You have this magical way of making me
happy just by existing and by doing all the little
things that make me feel so loved and special.
You're honestly the most caring person I know.
You always put everyone before yourself, and I
swear, how sweet is thattt? 🥹 I keep falling for
you EVERY SINGLE DAY, even when I think it's
impossible to love you more.

I'm so incredibly proud of you for managing so
many things at once and still being the strong,
kind, and amazing person you are. You're
genuinely one of the strongest people I know,
and I hope you always remember how proud I
am of you.
I love you so, so much, babyyyyy. ❤️
Happy Boyfriend's Day, my favourite person!
```
- Handwritten/cursive style font
- Comfortable line height
- Dark text on aged paper

**Polaroid Photos (4):**

**Top-Left Photo:**
- White Polaroid frame
- Slightly rotated (approx -5° to -8°)
- Shows a photo (couple in low light)
- Blue tape/washi tape at top
- Shadow beneath

**Bottom-Left Photo:**
- White Polaroid frame
- Slightly rotated
- Shows a couple selfie
- Shadow beneath

**Top-Right Photo:**
- White Polaroid frame
- Slightly rotated (approx +3° to +5°)
- Shows a couple in greenery/outdoor setting
- Blue tape at top
- Shadow beneath

**Bottom-Right Photo:**
- White Polaroid frame
- Slightly rotated
- Shows a person at what appears to be a performance/DJ setup
- Bright colored setting (teal/blue background)
- Shadow beneath

**Decorative elements:**
- Blue scrapbook tape strips at photo corners
- Blue stars in corners of the frame
- Dark navy blue decorative border elements
- Small blue star decorations scattered

**Interactions:**
- Back/return to CHOOSE_GIFTS (mechanism not fully visible in video, likely a back button or click-outside)

---

### State 6: BOUQUET EXPERIENCE (9.5s – 12.0s)

**Timestamp:** 9.5s – 12.0s
**Screen name:** Bouquet Experience

**Background:**
- Cream graph-paper with scrapbook frame

**Layout:**

**Left side — Romantic text + Character:**
- Heading text (handwritten style, large, bold black):
```
i have the most
handsome bf <3
```
- Lowercase "i" at start
- "<3" as text heart, not ♥ symbol
- Below the text: cute cartoon character illustration
  - Character with dark hair (bob cut)
  - Pink/red blushing cheeks  
  - Green scarf/jacket
  - Blue shirt beneath
  - Smiling with closed/happy eyes
  - Simple kawaii style

**Center — Doodle:**
- Small hand-drawn text: `FoR YoU;)`
- Small blue flower doodle on a stem
- Hand-drawn feel

**Right side — Bouquet:**
- Same white tulip bouquet from gift selection
- Now LARGE — zoomed/enlarged significantly
- Dark paper wrapping
- Navy blue ribbon
- Green stems prominent
- Takes up approximately 40-50% of viewport on the right side

**Bouquet Zoom Animation (key behavior):**
- At 9.0s-9.5s: bouquet starts normal sized on the gift selection screen
- The bouquet then dramatically scales/zooms larger
- At 12.0s: bouquet is VERY large, stems and ribbon filling much of the screen (inverted/upside down relative to upper portion, stems visible prominently in upper-left)
- After the zoom animation, it returns to CHOOSE_GIFTS (visible at 12.5s)

**Interactions:**
- Auto-return to CHOOSE_GIFTS after animation completes

---

### State 7: FINAL GIFT — Initial (13.5s)

**Timestamp:** 13.5s
**Screen name:** Final Gift (Opening)

**Background:**
- Cream graph-paper with scrapbook frame

**Layout:**

**Left side — Vinyl Record Artwork:**
- Dark navy/purple card/artwork
- Contains an illustrated vinyl record:
  - Black vinyl disk with grooves
  - Heart-shaped center label (dark purple/navy with pink/red heart)
  - Tonearm/needle visible
- Romantic text around/beside the record:
```
AND
SUDDENLY,
ALL THE LOVE
SONGS WERE ABOUT
you ♡
```
- Text is in white/light colored handwritten style
- Small heart decorations scattered
- Dark navy/purple mauve background for the card
- Card has a subtle border/frame

**Right side — Blue Card with OPEN:**
- Large blue card/envelope
- Tilted/rotated (~15° clockwise)
- Contains a white heart with dashed stitching border
- Text inside the heart: `OPEN`
- Dark blue bold text

**Lower decorative elements:**
- Star decorations (dark blue filled star above vinyl)
- Checkered/plaid elements visible in upper-right
- Partially visible: circular disco ball-like element at bottom center
- Small stars scattered

**Music Player (lower-left):**
- Compact rounded rectangle (dark blue/teal background)
- Left: Small album artwork thumbnail (reddish/warm tones)
- Center: Song title `Tu Hi Mera` (white text, bold)
- Below: Artist `Pritam Chakraborty` (smaller, lighter text)
- Right: Play button (white circle with play triangle ▶)
- Position: Lower-left area of viewport

**Interactions:**
- Click OPEN card → reveals full card content (State 8)
- Click Play → starts music

---

### State 8: FINAL GIFT — Open Card (14.0s – 16.5s)

**Timestamp:** 14.0s – 16.5s
**Screen name:** Final Gift (Revealed)

**Same layout as State 7 but the right-side card is now OPEN:**

**Right side — Revealed Card:**
- White/cream paper card
- Thick blue border frame
- Tilted/rotated (~10-15° clockwise)
- Content:

**Top:**
```
I LOVE YOU
```
- Large, bold, dark blue handwritten/display font

**Center:**
- Cute stick figure illustration:
  - Simple circle head
  - Dot eyes, small smile
  - Blob/capsule body (white)
  - Outstretched stick arms
  - Simple, cute, hand-drawn
  - Dark blue/navy outline

**Bottom:**
```
Soooooo.....!
MUCH ♥
```
- "Soooooo.....!" in dark blue handwritten font
- "MUCH" in large bold dark blue
- Small dark blue/purple heart (♥) after MUCH

**Music Player:**
- At 15.0s: Play button has changed to Pause (⏸) — indicating music is now playing
- Music player position and design same as State 7

**Other elements:**
- Vinyl artwork (left) unchanged
- Disco ball decoration (bottom-center) partially visible
- Dark blue star decoration above the vinyl card
- Checkered/plaid pattern visible in upper-right corner area

---

## Design System

### Color Palette

| Color | Hex (approximate) | Usage |
|-------|-------------------|-------|
| Deep Navy | `#1a1a3e` / `#1c1c4a` | Intro background, borders, frame |
| Royal Blue | `#2b4a8a` / `#3355aa` | Stars, decorative elements |
| Medium Blue | `#4466aa` / `#5577bb` | Secondary decorations, plaid |
| Cream/Off-white | `#f5f0e8` / `#f8f4ec` | Graph-paper background, paper |
| Aged Paper Tan | `#e8dcc8` / `#ddd0b8` | Letter paper |
| Muted Red | `#b83333` / `#c44444` | YES/NO/TRY AGAIN buttons |
| Dark Text | `#1a1a1a` / `#222222` | Headings, body text |
| White | `#ffffff` | Polaroid frames, some text |
| Dark Burgundy | `#4a1a2a` | Character eyes |
| Light Blue (tears) | `#a8c8e8` / `#b4d4f0` | Tear puddle |
| Pink/Blush | `#e8a0a0` / `#f0b0b0` | Character cheeks |

### Typography

**Display / Title (Intro):**
- Bold, decorative serif
- Retro/vintage feel
- Cream/gold color with slight 3D appearance
- Suggested similar fonts: Playfair Display, Lobster, or a retro display font

**Heading (Screen titles):**
- Bold, black, display/sans-serif
- All uppercase
- High contrast against cream background
- Suggested: bold sans-serif or display font

**Handwritten (Letter, Bouquet text):**
- Informal cursive/handwritten
- Dark brown/black
- Comfortable reading size
- Suggested: Caveat, Patrick Hand, Shadows Into Light, or similar

**Body (Letter content):**
- Handwritten/cursive style
- Readable at body size
- Supports emojis
- Comfortable line height (~1.5-1.6)

**UI (Buttons, Music player):**
- Clean, readable
- White on dark backgrounds

### Scrapbook Frame System

The frame is REUSED across all inner pages (Accept Gift, Sad Response, Choose Gifts, Letter, Bouquet, Final Gift).

Components:
1. **Outer border:** Dark navy/blue irregular border
2. **Left plaid strip:** Checkered blue pattern along left edge
3. **Top-left star:** Large filled dark blue star
4. **Top-right swirl:** Curvy blue decorative swirl element
5. **Right web:** Dark blue spider-web/decorative web element
6. **Bottom-right:** Silver metallic star/decorative element
7. **Bottom-left:** Curved blue border element
8. **Bottom-right alternate:** Small decorative hearts/elements

### Shadows
- Soft, realistic paper shadows on photos and cards
- Not heavy drop shadows — subtle elevation feel
- Approximate: `0 4px 8px rgba(0,0,0,0.15)` range

### Rotations
- Polaroid photos: -8° to +5° individual rotations
- Gift items: -5° to +5°
- Final card: ~10-15° clockwise
- Slight, intentional imperfection

### Graph-Paper Background
- Pale cream/off-white base
- Very subtle grid lines
- Low contrast (grid barely visible)
- Warm paper tone
- CSS can achieve with `repeating-linear-gradient` or a very subtle background image

---

## Platform UI to IGNORE

The following elements visible in the recording are platform UI and must NOT be reproduced:
- Heart/Like button and "Likes" text (right side)
- Comment button with "7,677" counter (bottom-right)
- Share button (right side)
- The entire right sidebar of social platform controls
- Any video playback controls
- The light purple/blue background visible outside the website frame

---

## Interaction Flow Summary

```
INTRO (0.0s)
  ↓ CONTINUE
ACCEPT_GIFT (0.5s)
  ├── NO → SAD_RESPONSE (2.5s) → TRY_AGAIN → ACCEPT_GIFT (4.0s)
  └── YES → CHOOSE_GIFTS (5.0s)
                ├── ENVELOPE → LETTER (6.0s) → back → CHOOSE_GIFTS (8.5s)
                ├── BOUQUET → BOUQUET_EXPERIENCE (9.5s) → zoom animation → CHOOSE_GIFTS (12.5s)
                └── GIFT_BOX → FINAL_GIFT_CLOSED (13.5s) → OPEN → FINAL_GIFT_OPEN (14.0s) + MUSIC
```

---

## Animation Notes

1. **Page transitions:** Smooth transitions between states (no harsh cuts visible)
2. **Confetti:** Small confetti particles on Accept Gift screen
3. **Bouquet zoom:** MOST PROMINENT animation — bouquet dramatically enlarges from center position, scaling up significantly before returning to gift selection
4. **Final card reveal:** "OPEN" card transitions to revealed "I LOVE YOU" card
5. **Music player:** Play/Pause toggle visible (play → pause icon change at 15.0s)
6. **Button feedback:** Cursor changes visible on button hovers
7. **Gift hover:** Subtle scale/interaction feedback on gift items

---

## Key Implementation Notes

1. The scrapbook frame is consistent across all inner pages — build it as a reusable component
2. The intro screen has a DIFFERENT background (dark navy) from all other screens (cream graph-paper)
3. The bouquet animation is the most complex interaction — it zooms the bouquet from its position on the gift selection screen
4. The final gift has TWO states: closed (blue card with "OPEN" heart) and open (white card with "I LOVE YOU")
5. The music player appears only on the final gift screen
6. All four Polaroid photos have unique rotations and positions
7. The character illustrations (cute + crying) are distinct kawaii-style drawings
8. The letter text is visible and readable — use a handwritten font that supports emojis
