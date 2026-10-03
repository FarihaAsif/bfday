# Product Requirements Document (PRD)

## Boyfriend's Day Interactive Scrapbook Website

**Project type:** Personal interactive web experience\
**Primary purpose:** A romantic digital Boyfriend's Day gift\
**Reference:** User-provided reference video\
**Initial asset strategy:** Placeholder-first\
**Development approach:** React + TypeScript + Vite + iterative Ralph
Loop\
**Primary target:** Desktop-style layout matching the reference, with
responsive mobile support

------------------------------------------------------------------------

# 1. Product Overview

Create a highly polished interactive Boyfriend's Day website that
recreates the visual language and interaction flow demonstrated in the
provided reference video.

The website should feel like a **handmade digital scrapbook** rather
than a conventional website.

The experience should guide the recipient through a sequence of playful
screens:

1.  Boyfriend's Day opening screen
2.  Gift acceptance screen
3.  Playful "No" response
4.  Gift-selection screen
5.  Personal letter
6.  Bouquet/compliment experience
7.  Final love/music screen

The initial build must use **placeholders** for all personal assets. The
architecture must make it possible to replace those placeholders later
with real photographs, artwork, music, and personalized text without
changing the core components.

The reference video is the visual source of truth. The implementation
should reproduce its layout, visual hierarchy, interactions, animations,
and overall feeling as closely as practical.

------------------------------------------------------------------------

# 2. Reference Media

The supplied reference video is approximately:

-   Duration: 16.77 seconds
-   Resolution: 1922 × 1046
-   Frame rate: 60 FPS

The video contains social-media/video-platform UI around the website
recording. That overlay is NOT part of the product and must be ignored.

The website itself uses a cream graph-paper scrapbook background, dark
navy/blue framing, hand-drawn decorative elements, Polaroid-style
photographs, paper cards, cute illustrations, and handwritten/retro
typography.

------------------------------------------------------------------------

# 3. Product Goals

## Primary goals

### G1 --- High-fidelity visual recreation

Reproduce the reference website's:

-   overall composition
-   screen layouts
-   colors
-   typography
-   scrapbook framing
-   paper texture
-   decorative elements
-   imagery placement
-   button styling
-   animations
-   transitions

### G2 --- Complete interaction flow

Every visible interaction demonstrated in the reference must work.

### G3 --- Personalization without redevelopment

All personal content must be separated from application logic.

A future asset replacement should require changing files/configuration
rather than rewriting components.

### G4 --- Easy future editing

The user should be able to change:

-   boyfriend's name
-   personal message
-   photographs
-   gift assets
-   music
-   song metadata
-   captions
-   small visual settings

without needing to understand the entire codebase.

### G5 --- Ralph-loop refinement

The implementation should be repeatedly compared against the reference
until major visual mismatches are eliminated.

------------------------------------------------------------------------

# 4. Non-Goals

The initial version should NOT include:

-   authentication
-   user accounts
-   database
-   backend
-   payment system
-   admin dashboard
-   CMS
-   analytics
-   social login
-   unnecessary APIs
-   complex state-management libraries
-   real-time functionality

This is a static, client-side personal experience.

------------------------------------------------------------------------

# 5. Target Audience

## Primary user

The boyfriend receiving the website.

The recipient should experience the site as a surprise/gift rather than
as a normal informational website.

## Secondary user

The creator of the website, who needs to:

-   edit personal text
-   replace photos
-   replace music
-   replace placeholders
-   adjust small design details
-   deploy the finished site

------------------------------------------------------------------------

# 6. Experience Principles

The website should feel:

-   personal
-   cute
-   romantic
-   playful
-   handmade
-   nostalgic
-   scrapbook-like
-   slightly imperfect
-   visually rich
-   emotionally warm

Avoid making it feel:

-   corporate
-   overly modern
-   generic
-   overly polished in a sterile way
-   like a SaaS dashboard
-   like a generic Valentine's template

The small imperfections are part of the aesthetic.

------------------------------------------------------------------------

# 7. Visual Design System

## 7.1 Primary palette

Use a palette based on the reference:

-   deep navy blue
-   medium/dark royal blue
-   cream
-   warm off-white
-   pale graph-paper green/cream
-   dark brown/black text
-   muted red for action buttons
-   white accents

The exact values should be tuned during visual comparison rather than
guessed once and left unchanged.

------------------------------------------------------------------------

## 7.2 Background

The primary interior background is a pale cream/off-white graph-paper
texture.

Characteristics:

-   very subtle grid
-   low contrast
-   warm paper tone
-   handmade stationery appearance

The intro screen uses a darker navy paper/scrapbook background.

------------------------------------------------------------------------

## 7.3 Scrapbook frame

Create a reusable scrapbook frame component.

Recurring visual elements include:

-   dark blue border
-   curved/irregular paper edges
-   blue stars
-   hand-drawn decorations
-   checkered/plaid blue elements
-   small stickers/doodles
-   paper cutout appearance

The frame should be reusable across screens.

------------------------------------------------------------------------

## 7.4 Shadows

Use soft, realistic paper shadows.

Photos and paper cards should appear slightly lifted from the
background.

Avoid excessive drop shadows.

------------------------------------------------------------------------

## 7.5 Rotation

Some physical scrapbook elements should have slight rotations.

Examples:

-   Polaroid photos
-   paper cards
-   gift elements
-   final message card

Use small values such as approximately -5° to +5° and tune visually.

The arrangement should not feel mathematically perfect.

------------------------------------------------------------------------

# 8. Typography

Use separate type treatments for:

### Display typography

For the main Boyfriend's Day title.

Characteristics:

-   bold
-   retro/vintage
-   decorative
-   high contrast
-   large

### Handwritten typography

For romantic phrases and captions.

Characteristics:

-   playful
-   informal
-   handwritten
-   slightly irregular

### Body typography

For the letter.

Characteristics:

-   readable
-   compact
-   paper-letter/typewriter/serif feel
-   comfortable line height

### UI typography

For:

-   buttons
-   music player
-   smaller labels

Typography must be visually compared against the reference rather than
selected only from a generic font list.

------------------------------------------------------------------------

# 9. Information Architecture

The website should behave as a single-page interactive experience.

Suggested state model:

``` text
INTRO
  ↓
ACCEPT_GIFT
  ├── NO → SAD_RESPONSE → TRY_AGAIN → ACCEPT_GIFT
  └── YES → CHOOSE_GIFTS
                  ├── ENVELOPE → LETTER → CHOOSE_GIFTS
                  ├── BOUQUET → BOUQUET_EXPERIENCE → CHOOSE_GIFTS
                  └── GIFT_BOX → FINAL_GIFT
```

No full-page reloads should be required.

If the reference shows a different transition, the reference takes
precedence.

------------------------------------------------------------------------

# 10. Screen Requirements

# 10.1 Screen 1 --- Intro / Landing

## Purpose

Immediately establish the Boyfriend's Day theme.

## Main content

Large central title:

``` text
HAPPY
BOYFRIEND'S
♥ DAY ♥
```

The exact visual treatment should match the reference.

## Visual requirements

-   dark navy scrapbook background
-   large blue star decorations
-   white/cream star outlines
-   small doodle/decorative elements
-   camera-like decorative element near the lower area
-   scrapbook/paper texture
-   centered title
-   centered/bottom CTA

## CTA

Text:

``` text
CONTINUE
```

Appearance:

-   long pill-shaped button
-   pale/cream body
-   blue border/details
-   small decorative treatment matching the reference

## Interaction

Clicking CONTINUE transitions to ACCEPT_GIFT.

------------------------------------------------------------------------

# 10.2 Screen 2 --- Accept the Gift

## Purpose

Create a playful "will you accept my gift?" interaction.

## Background

-   pale cream graph paper
-   scrapbook border
-   navy/blue decorations
-   stars
-   doodles
-   corner elements

## Heading

``` text
PLEASE ACCEPT THE GIFT
```

Centered near the top.

## Main illustration

A cute white/pale cartoon character.

Characteristics visible in the reference:

-   large glossy dark eyes
-   cute expression
-   small body
-   simple hand-drawn appearance
-   pink/red facial accents

Use a placeholder illustration initially.

## Buttons

Two red rounded buttons:

``` text
YES
NO
```

They should be visually grouped beneath the character.

## Interaction

YES → CHOOSE_GIFTS

NO → SAD_RESPONSE

------------------------------------------------------------------------

# 10.3 Screen 3 --- Sad Response

## Purpose

Make rejecting the gift playful rather than final.

## Heading

``` text
WHY DID YOU CLICK NO!
```

## Illustration

Crying cartoon character.

Visible characteristics:

-   large watery/glossy eyes
-   tears
-   sad expression
-   blue puddle below
-   cute hand-drawn style

## CTA

``` text
TRY AGAIN
```

Small red rounded button.

## Interaction

TRY AGAIN → ACCEPT_GIFT

The user must never become trapped.

------------------------------------------------------------------------

# 10.4 Screen 4 --- Choose Your Gifts

## Purpose

Present three interactive gifts.

## Heading

``` text
Choose Your Gifts
```

## Layout

Three major gift objects across the page:

### Left

Blue envelope.

### Center

Bouquet of white flowers with a dark navy ribbon.

### Right

Dark blue/navy wrapped gift box with ribbon.

The objects should be displayed as physical scrapbook objects, not as UI
cards.

## Interaction

Each gift is clickable.

Subtle hover/touch behavior may include:

-   scale
-   small rotation
-   gentle movement

Do not over-animate.

------------------------------------------------------------------------

# 10.5 Screen 5 --- Letter

## Purpose

Deliver the main personal message.

## Layout

A large central paper letter surrounded by four Polaroid-style
photographs.

### Letter

Characteristics:

-   cream/tan paper
-   slightly irregular/torn edges
-   soft paper shadow
-   centered composition
-   readable body text

### Photographs

Four placeholder Polaroids:

-   top-left
-   bottom-left
-   top-right
-   bottom-right

Each should have:

-   white frame
-   slight rotation
-   subtle shadow
-   scrapbook tape or attachment detail

## Placeholder-first requirement

Use placeholder images initially.

The final personal photographs can later replace them without layout
changes.

------------------------------------------------------------------------

# 10.6 Letter Content

The exact personal copy should be editable.

The reference contains a romantic letter beginning approximately:

``` text
Heyy Babyyyy! ❤️

Happy Boyfriend's Day to the besttt boyfriend in the whole world! ...
```

The complete final message should be stored in the content configuration
rather than hardcoded into the component.

The implementation should support:

-   paragraphs
-   line breaks
-   emojis
-   emphasis if needed

The content should be easy to replace.

------------------------------------------------------------------------

# 10.7 Screen 6 --- Bouquet Experience

## Purpose

Deliver a playful romantic compliment.

The reference shows a handwritten-style message along the lines of:

``` text
I have the most
handsome bf <3
```

The composition contains:

-   romantic handwritten text
-   cute character illustration
-   small decorative doodle
-   large bouquet of white flowers
-   dark blue ribbon

## Interaction

When the bouquet is selected from Choose Your Gifts:

1.  The bouquet should transition prominently into view.
2.  It should scale/enlarge dramatically.
3.  The movement should feel playful and intentional.
4.  The experience should eventually return to the gift-selection state
    if that is the behavior shown in the reference.

Use Framer Motion or carefully tuned CSS animation.

------------------------------------------------------------------------

# 10.8 Screen 7 --- Final Gift / Music

## Purpose

Provide the final emotional reveal.

## Background

Cream graph-paper scrapbook page with the common blue frame.

## Left side

A dark navy artwork/card containing a vinyl record.

Visible romantic phrase:

``` text
AND
SUDDENLY,
ALL THE LOVE
SONGS WERE ABOUT
you ♡
```

The exact wording and line breaks should be tuned against the reference.

## Right side

A tilted white paper/card with thick blue framing.

Main message:

``` text
I LOVE YOU
```

Below it is the cute character/illustration.

Lower text:

``` text
Soooooo....!
MUCH ♥
```

## Music player

Positioned toward the lower-left portion of the screen.

Custom UI should contain:

-   album artwork
-   song title
-   artist
-   play/pause control

Reference metadata:

``` text
Tu Hi Mera
Pritam Chakraborty
```

The music player must actually control an HTML5 Audio element.

No browser-native audio controls.

No autoplay before user interaction.

------------------------------------------------------------------------

# 11. Interaction Requirements

  -----------------------------------------------------------------------
  ID                      Interaction             Expected result
  ----------------------- ----------------------- -----------------------
  INT-01                  Click Continue          Open Accept Gift

  INT-02                  Click Yes               Open Choose Your Gifts

  INT-03                  Click No                Open Sad Response

  INT-04                  Click Try Again         Return to Accept Gift

  INT-05                  Click Envelope          Open Letter

  INT-06                  Exit/return from Letter Return to Gift
                                                  Selection

  INT-07                  Click Bouquet           Play Bouquet Experience

  INT-08                  Bouquet flow completes  Return to Gift
                                                  Selection if reference
                                                  does

  INT-09                  Click Gift Box          Open Final Gift

  INT-10                  Click Play              Start audio

  INT-11                  Click Pause             Pause audio
  -----------------------------------------------------------------------

If the reference contains an interaction not listed above, it must also
be implemented.

------------------------------------------------------------------------

# 12. Animation Requirements

Animations must serve the experience rather than decorate it
unnecessarily.

Required animation categories:

### Page transitions

Smooth transitions between major states.

### Button feedback

Small press/scale response.

### Gift hover

Subtle scale/rotation.

### NO response

Transition from acceptance screen to sad state.

### YES response

Playful transition into gift selection.

### Bouquet

Prominent zoom/scale animation matching the reference.

### Music

Play/pause state change.

Avoid:

-   excessive particles
-   excessive confetti
-   random floating objects
-   unnecessary parallax
-   excessive 3D effects

------------------------------------------------------------------------

# 13. Placeholder Asset Requirements

Initial development MUST use placeholders.

Directory:

``` text
public/
└── assets/
    ├── photos/
    │   ├── placeholder-1.jpg
    │   ├── placeholder-2.jpg
    │   ├── placeholder-3.jpg
    │   └── placeholder-4.jpg
    │
    ├── gifts/
    │   ├── placeholder-envelope.png
    │   ├── placeholder-bouquet.png
    │   └── placeholder-gift-box.png
    │
    ├── illustrations/
    │   ├── placeholder-character.png
    │   ├── placeholder-vinyl.png
    │   └── placeholder-card.png
    │
    └── music/
        └── placeholder.mp3
```

Placeholders should be visually obvious during development.

Do not use personal assets during the initial build.

------------------------------------------------------------------------

# 14. Content Architecture

Create:

``` text
src/config/siteContent.ts
```

Example:

``` ts
export const siteContent = {
  intro: {
    title: "HAPPY BOYFRIEND'S DAY",
    buttonText: "CONTINUE",
  },

  acceptance: {
    title: "PLEASE ACCEPT THE GIFT",
    yesText: "YES",
    noText: "NO",
    retryText: "TRY AGAIN",
  },

  gifts: {
    title: "Choose Your Gifts",
  },

  letter: {
    body: `PLACEHOLDER LETTER`,
    photos: {
      topLeft: "/assets/photos/placeholder-1.jpg",
      bottomLeft: "/assets/photos/placeholder-2.jpg",
      topRight: "/assets/photos/placeholder-3.jpg",
      bottomRight: "/assets/photos/placeholder-4.jpg",
    },
  },

  bouquet: {
    heading: "I have the most handsome bf <3",
    image: "/assets/gifts/placeholder-bouquet.png",
  },

  final: {
    title: "I LOVE YOU",
    subtitle: "Soooooo....! MUCH ♥",
    vinylImage: "/assets/illustrations/placeholder-vinyl.png",
  },

  music: {
    title: "Tu Hi Mera",
    artist: "Pritam Chakraborty",
    src: "/assets/music/placeholder.mp3",
  },
};
```

Add clear comments indicating what is safe to edit.

------------------------------------------------------------------------

# 15. Recommended Component Architecture

Suggested:

``` text
src/
├── components/
│   ├── ScrapbookFrame.tsx
│   ├── ScrapbookBackground.tsx
│   ├── DecorativeElements.tsx
│   ├── PrimaryButton.tsx
│   ├── PolaroidPhoto.tsx
│   ├── GiftItem.tsx
│   ├── MusicPlayer.tsx
│   └── PageTransition.tsx
│
├── screens/
│   ├── IntroScreen.tsx
│   ├── AcceptGiftScreen.tsx
│   ├── SadResponseScreen.tsx
│   ├── GiftSelectionScreen.tsx
│   ├── LetterScreen.tsx
│   ├── BouquetScreen.tsx
│   └── FinalGiftScreen.tsx
│
├── config/
│   └── siteContent.ts
│
├── styles/
│   ├── globals.css
│   ├── scrapbook.css
│   └── animations.css
│
├── App.tsx
└── main.tsx
```

The exact architecture can change if a better implementation is found.

The important requirement is separation of:

-   screens
-   reusable visual components
-   content
-   assets
-   styling
-   state/interaction

------------------------------------------------------------------------

# 16. State Management

A simple React state machine is sufficient.

Suggested:

``` ts
type Screen =
  | "intro"
  | "acceptGift"
  | "sadResponse"
  | "chooseGifts"
  | "letter"
  | "bouquet"
  | "finalGift";
```

Avoid unnecessary state libraries.

The state should control which experience is currently displayed.

------------------------------------------------------------------------

# 17. Responsive Requirements

Desktop is the primary reference target.

Support:

-   1920px+
-   1440px
-   1280px
-   tablet
-   mobile

Mobile requirements:

-   no horizontal scrolling
-   buttons remain accessible
-   text remains readable
-   gifts remain clickable
-   scrapbook frame remains visually coherent
-   letter can scroll vertically
-   photos remain visible
-   music controls remain usable

Do not simply shrink the desktop design.

------------------------------------------------------------------------

# 18. Accessibility and Usability

Even though this is a visual gift site:

-   buttons must be actual buttons
-   clickable gift objects must have accessible labels
-   images should have meaningful alt text
-   keyboard interaction should work where reasonable
-   text must remain readable
-   audio should never unexpectedly autoplay
-   interactive controls should have visible focus states

Accessibility should not compromise the visual recreation.

------------------------------------------------------------------------

# 19. Performance Requirements

Target:

-   fast initial load
-   optimized images
-   no unnecessarily huge assets
-   no continuous expensive animations
-   no memory leaks from audio or animation
-   no unnecessary rerenders

Prefer local assets.

------------------------------------------------------------------------

# 20. Browser Requirements

Target modern:

-   Chrome
-   Edge
-   Safari
-   Firefox

The primary testing environment should be Chromium-based.

------------------------------------------------------------------------

# 21. Technical Acceptance Criteria

The implementation passes technical QA only if:

-   `npm install` succeeds
-   `npm run dev` starts
-   `npm run build` succeeds
-   TypeScript compilation succeeds
-   no broken imports
-   no missing assets
-   no major console errors
-   no broken interactions
-   no dead-end screen
-   audio play/pause works
-   responsive layout works

------------------------------------------------------------------------

# 22. Visual QA

Visual QA must be performed against the supplied reference.

For each major screen:

1.  Navigate to the screen.
2.  Capture a screenshot.
3.  Compare it with the reference.
4.  Identify the largest discrepancy.
5.  Fix it.
6.  Repeat.

Compare:

-   layout
-   proportions
-   alignment
-   typography
-   colors
-   imagery
-   spacing
-   border shape
-   decorative elements
-   shadows
-   rotation
-   animation

Do not rely only on subjective code review.

------------------------------------------------------------------------

# 23. Ralph Loop Requirements

Create:

``` text
RALPH.md
```

The Ralph Loop should follow:

``` text
OBSERVE
↓
IMPLEMENT
↓
RUN
↓
SCREENSHOT
↓
COMPARE
↓
IDENTIFY LARGEST MISMATCH
↓
FIX
↓
BUILD
↓
VERIFY
↓
REPEAT
```

## Ralph priority

### P0

Broken functionality.

### P1

Wrong screen/layout/major element.

### P2

Wrong positioning/dimensions.

### P3

Wrong typography/colors/styling.

### P4

Minor visual differences.

The agent should always fix the highest-impact remaining issue first.

------------------------------------------------------------------------

# 24. Definition of Done

The project is complete only when all of the following are true.

## Functional

-   [ ] Intro works
-   [ ] Continue works
-   [ ] Yes works
-   [ ] No works
-   [ ] Try Again works
-   [ ] Gift selection works
-   [ ] Envelope works
-   [ ] Letter works
-   [ ] Bouquet works
-   [ ] Bouquet animation works
-   [ ] Gift box works
-   [ ] Final screen works
-   [ ] Music player works
-   [ ] Play/pause works
-   [ ] No interaction causes a dead end

## Visual

-   [ ] Overall scrapbook aesthetic matches reference
-   [ ] Intro matches
-   [ ] Acceptance screen matches
-   [ ] Sad screen matches
-   [ ] Gift-selection screen matches
-   [ ] Letter matches
-   [ ] Bouquet screen matches
-   [ ] Final screen matches
-   [ ] Music player matches
-   [ ] Typography is visually close
-   [ ] Colors are visually close
-   [ ] Decorative elements are present
-   [ ] Major animations match the reference

## Architecture

-   [ ] Personal content is centralized
-   [ ] Placeholder assets are centralized
-   [ ] Components are reusable
-   [ ] No personal assets are hardcoded into components
-   [ ] No unnecessary backend exists
-   [ ] README exists
-   [ ] RALPH.md exists

------------------------------------------------------------------------

# 25. Personalization Phase --- AFTER Ralph Completion

Only after the placeholder implementation is visually and functionally
complete should personal assets be introduced.

Replace:

``` text
placeholder-1.jpg
placeholder-2.jpg
placeholder-3.jpg
placeholder-4.jpg
```

with real photographs.

Replace:

``` text
placeholder.mp3
```

with the final song.

Replace placeholder text with the final personal message.

Replace placeholder artwork where necessary.

The underlying layout and components should not need to change.

------------------------------------------------------------------------

# 26. Creator Editing Guide

The README must clearly explain:

## Change the letter

Edit:

``` text
src/config/siteContent.ts
```

## Change photos

Replace files in:

``` text
public/assets/photos/
```

## Change gift images

Replace files in:

``` text
public/assets/gifts/
```

## Change music

Replace:

``` text
public/assets/music/placeholder.mp3
```

and update the configuration if needed.

## Change song metadata

Edit:

``` text
src/config/siteContent.ts
```

## Change colors

Centralize the primary colors in the stylesheet or CSS variables.

## Change fonts

Centralize font definitions rather than scattering them across
components.

------------------------------------------------------------------------

# 27. Deployment Requirements

The final website should be deployable as a static frontend.

Suitable deployment targets include:

-   Vercel
-   Netlify
-   GitHub Pages
-   Cloudflare Pages

No server is required for the initial implementation.

The README should contain simple deployment instructions.

------------------------------------------------------------------------

# 28. Future Extensibility

The architecture should make it possible to add later:

-   more gifts
-   additional photographs
-   another letter
-   additional music
-   a photo gallery
-   a timeline
-   more scrapbook pages
-   custom cursor
-   final surprise screen

However, these should NOT be implemented unless present in the reference
or explicitly requested later.

Do not add speculative features.

------------------------------------------------------------------------

# 29. Product Success Criteria

The project succeeds when:

1.  A first-time visitor can complete the entire experience without
    instructions.
2.  The visual design strongly resembles the reference.
3.  The scrapbook aesthetic remains consistent across every screen.
4.  All demonstrated interactions work.
5.  The website is responsive.
6.  Personal assets can later be swapped in without rewriting the
    application.
7.  The final implementation remains simple enough for the creator to
    maintain.

------------------------------------------------------------------------

# 30. Final Product Vision

The finished website should feel like opening a small handmade digital
scrapbook made specifically for one person.

The user should move from:

``` text
SURPRISE
↓
PLAYFUL INTERACTION
↓
CHOOSING GIFTS
↓
PERSONAL LETTER
↓
ROMANTIC BOUQUET
↓
FINAL LOVE MESSAGE + MUSIC
```

The technical implementation should remain clean and maintainable
underneath the highly personal visual presentation.

The core rule throughout development is:

> **The reference video determines the experience. The code exists to
> reproduce that experience, not reinterpret it.**

------------------------------------------------------------------------

# 31. Final Handoff Checklist

Before handoff:

-   [ ] `README.md` complete
-   [ ] `REFERENCE_ANALYSIS.md` complete
-   [ ] `RALPH.md` complete
-   [ ] placeholder assets included
-   [ ] content configuration included
-   [ ] all screens implemented
-   [ ] all interactions implemented
-   [ ] music player implemented
-   [ ] responsive behavior tested
-   [ ] build passes
-   [ ] console checked
-   [ ] visual QA performed
-   [ ] remaining deviations documented
-   [ ] project is ready for personal asset replacement
