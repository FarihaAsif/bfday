# Ralph Loop Instructions

You are the implementation agent for this project.

## Source of Truth

Before starting any work, read these files:

1. PRD.md
2. docs.md
3. tasks.md
4. progress.txt

These files define the requirements, architecture, implementation plan, and
previous progress.

Do not invent requirements that are not present in these files.

---

## Execution Process

At the beginning of every iteration:

1. Read PRD.md completely.
2. Read docs.md completely.
3. Read tasks.md.
4. Read progress.txt.
5. Identify the FIRST incomplete task in tasks.md.
6. Work only on that task unless completing it requires a directly related
   subtask.

Do not skip ahead to later tasks.

---

## Implementation Rules

- Inspect the existing code before modifying it.
- Follow the architecture defined in docs.md.
- Follow the requirements in PRD.md.
- Prefer simple, maintainable implementations.
- Do not introduce unnecessary dependencies.
- Do not rewrite working code without a reason.
- Do not change the architecture without documenting the reason.
- Preserve existing functionality.
- Do not mark a task complete until it is actually implemented and verified.

---

## Verification

After implementing a task:

1. Run the relevant tests.
2. Run TypeScript/type checking if applicable.
3. Run the build if applicable.
4. Fix any errors caused by your changes.
5. Verify the implementation against the task's acceptance criteria.

Never claim a task is complete without verification.

---

## Progress Tracking

After successfully completing a task:

1. Update progress.txt.
2. Record:
   - task completed
   - important implementation details
   - tests/checks performed
   - any important decisions
   - anything the next iteration needs to know

Do not delete previous progress.

---

## Git

After a task has been successfully implemented and verified:

- Create a clear git commit for the completed task.
- Do not commit broken or unverified work.

---

## Task Discipline

Implement tasks incrementally.

Do NOT attempt to implement the entire project in one iteration.

If a task is too large:

1. Complete the safely implementable portion.
2. Document the progress in progress.txt.
3. Continue in the next iteration.

---

## Completion

When all tasks in tasks.md are implemented and verified:

- Confirm that all acceptance criteria are satisfied.
- Run the final available tests/build/type checks.
- Update progress.txt with the final project status.

Do not declare the project complete if any task remains unfinished.

Mission

Build the exact interactive Boyfriend's Day scrapbook website shown in the
reference video that is available in this project.

This is a reference-reconstruction task, not a generic romantic website task.

The reference video is the visual and interaction source of truth.

The final result should feel like the same website was rebuilt from scratch,
while remaining clean, editable, responsive, and maintainable.

# REFERENCE VIDEO

The primary visual source of truth is:

reference/referencevideo.mp4

This file is part of the project repository and must be inspected throughout
development.

Do not assume the reference video is unavailable.

When implementing or visually refining a screen, inspect the relevant portion
of:

reference/referencevideo.mp4

The reference video has priority over assumptions or generic design conventions.

1. HIGHEST-PRIORITY INSTRUCTIONS

Follow these rules throughout the entire Ralph Loop:

Use the reference video as the source of truth.

Do not redesign the website.

Do not make a generic Valentine's/Boyfriend's Day template.

Do not simplify the scrapbook aesthetic.

Do not invent major UI elements that are not in the reference.

Do not remove visible details merely because they seem decorative.

Initially use placeholders for every personal asset.

Keep personal content separate from application logic.

Complete the current task from tasks.md; do not attempt to finish the entire
project in one iteration.

Before marking a task complete, actually verify it.

Keep the application working after every iteration.

Never claim a visual match without inspecting the rendered result.

The goal is not merely:

"a website with the same idea."

The goal is:

a high-fidelity interactive reconstruction of the website shown in the reference
video.

2. PROJECT CONTEXT

The project is a personal Boyfriend's Day gift.

The website is a small interactive digital scrapbook that takes the recipient
through:

INTRO ↓ PLEASE ACCEPT THE GIFT ↓ YES / NO ↓ CHOOSE YOUR GIFTS ↓
┌───────────────┬────────────────┬────────────────┐ │ ENVELOPE │ BOUQUET │ GIFT
BOX │ │ │ │ │ │ LETTER │ ROMANTIC │ FINAL LOVE │ │ │ EXPERIENCE │ + MUSIC │
└───────────────┴────────────────┴────────────────┘

The experience should feel personal, playful, handmade, romantic, and
scrapbook-like.

3. REFERENCE VIDEO

Before implementing any visual state, inspect the corresponding portion of the
reference video.

The video contains some surrounding recording/social-media UI.

Ignore all video-platform UI.

Do NOT reproduce:

social-media buttons

like counters

comment icons

share buttons

video controls

platform overlays

black recording UI

Only recreate the actual website visible inside the recording.

The reference website itself is approximately a desktop/wide composition.

Use the reference dimensions and proportions as the primary visual target.

4. VISUAL IDENTITY

The website has a handmade digital scrapbook aesthetic.

The dominant visual language is:

deep navy blue

medium blue

cream/off-white

pale graph-paper background

dark text

muted red action buttons

paper textures

hand-drawn stars

doodles

stickers

scrapbook borders

taped photographs

Polaroid photographs

slightly rotated paper elements

handwritten typography

playful romantic illustrations

The website must NOT become:

a SaaS interface

a modern dashboard

a glassmorphism website

a generic landing page

a standard card-based UI

a gradient-heavy website

a generic Valentine's template

The handmade scrapbook appearance is a core product requirement.

5. PLACEHOLDER-FIRST DEVELOPMENT

For the entire initial Ralph Loop, use placeholders.

Do NOT request my personal photos.

Do NOT wait for final artwork.

Do NOT use my real personal music.

Do NOT block implementation because final assets are unavailable.

Use placeholders for:

Photo 1 Photo 2 Photo 3 Photo 4

Envelope artwork Bouquet artwork Gift-box artwork

Cute character Crying character Vinyl artwork Final card artwork

Placeholder audio

The placeholders must preserve the intended:

aspect ratio

approximate dimensions

position

visual weight

rotation

spacing

The website must be fully functional before personal assets are introduced.

Later, I should be able to replace:

placeholder-photo-1.jpg

with a real photo without changing the component layout.

6. EDITABILITY REQUIREMENT

Create and maintain:

src/config/siteContent.ts

This is the central editable content layer.

It should contain, as appropriate:

export const siteContent = { boyfriendName: "PLACEHOLDER",

intro: { title: "HAPPY BOYFRIEND'S DAY", buttonText: "CONTINUE", },

acceptance: { title: "PLEASE ACCEPT THE GIFT", yesText: "YES", noText: "NO",
retryText: "TRY AGAIN", },

gifts: { title: "Choose Your Gifts", },

letter: { body: "PLACEHOLDER LETTER", photos: { topLeft:
"/assets/photos/placeholder-1.jpg", bottomLeft:
"/assets/photos/placeholder-2.jpg", topRight:
"/assets/photos/placeholder-3.jpg", bottomRight:
"/assets/photos/placeholder-4.jpg", }, },

bouquet: { heading: "I have the most handsome bf <3", image:
"/assets/gifts/placeholder-bouquet.png", },

final: { title: "I LOVE YOU", subtitle: "Soooooo....! MUCH ♥", vinylImage:
"/assets/illustrations/placeholder-vinyl.png", },

music: { title: "Tu Hi Mera", artist: "Pritam Chakraborty", src:
"/assets/music/placeholder.mp3", }, };

The exact structure may be improved if necessary.

The important requirement is:

Personal content must not be scattered throughout JSX.

Add clear comments:

# // ====================================== // EDITABLE PERSONAL CONTENT //

7. REQUIRED USER FLOW

Implement the website as a single-page interactive experience.

Expected state flow:

INTRO | | CONTINUE ↓ ACCEPT_GIFT | ├── NO │ ↓ │ SAD_RESPONSE │ | │ | TRY AGAIN │
↓ │ ACCEPT_GIFT │ └── YES ↓ CHOOSE_GIFTS | ├── ENVELOPE │ ↓ │ LETTER │ ↓ │
CHOOSE_GIFTS │ ├── BOUQUET │ ↓ │ BOUQUET EXPERIENCE │ ↓ │ CHOOSE_GIFTS │ └──
GIFT BOX ↓ FINAL_GIFT

If the reference shows a different transition, reproduce the reference.

No full-page reload should be required.

8. SCREEN 1 — INTRO

Reproduce the opening screen.

The central visual is the large Boyfriend's Day title:

HAPPY BOYFRIEND'S ♥ DAY ♥

The title should match the reference in:

scale

line breaks

alignment

weight

color

typography

spacing

Background:

dark navy

scrapbook/paper texture

Visible decorative language:

blue stars

outlined stars

small doodles

scrapbook decorations

camera-like decorative element

other visible details from the reference

CTA:

CONTINUE

The button should have the same general pill-shaped scrapbook treatment.

Interaction:

CONTINUE → ACCEPT_GIFT

Use a smooth transition appropriate to the reference.

9. SCREEN 2 — PLEASE ACCEPT THE GIFT

Reproduce the cream graph-paper scrapbook page.

Heading:

PLEASE ACCEPT THE GIFT

Main illustration:

A cute white/light-colored character with:

large glossy dark eyes

cute expression

simple body

pink/red facial accents

hand-drawn/kawaii appearance

Use a placeholder during initial development.

Buttons:

YES NO

Both are red rounded/pill-shaped buttons.

The surrounding frame should include the visible:

blue scrapbook border

graph-paper background

stars

doodles

plaid/checkered details

corner decorations

Interaction:

YES → CHOOSE_GIFTS NO → SAD_RESPONSE

10. SCREEN 3 — NO / SAD RESPONSE

Clicking NO must produce the playful rejection response.

Heading:

WHY DID YOU CLICK NO!

Main illustration:

A crying version of the cute character.

Include visible characteristics from the reference:

large watery eyes

tears

sad expression

blue puddle beneath the character

Button:

TRY AGAIN

Interaction:

TRY AGAIN → ACCEPT_GIFT

The user must never become trapped.

The transition should preserve the scrapbook aesthetic.

11. SCREEN 4 — CHOOSE YOUR GIFTS

Heading:

Choose Your Gifts

Background:

cream graph paper

scrapbook border

blue decorations

stars/doodles

Three large interactive objects:

LEFT — ENVELOPE

A blue envelope containing/representing a letter.

CENTER — BOUQUET

A bouquet of white flowers tied with a dark navy/blue ribbon.

RIGHT — GIFT BOX

A dark/navy blue wrapped gift box with ribbon.

Important:

These are scrapbook objects, not standard web cards.

Do NOT put each gift inside a generic rectangular card.

Each object should have subtle interaction:

slight scale

slight rotation

slight movement

Do not over-animate.

12. ENVELOPE → LETTER

Clicking the envelope opens the letter experience.

The reference shows a large central cream/tan paper letter.

Reproduce:

paper texture

irregular/torn/scalloped edges

soft shadow

scrapbook appearance

Surround the letter with four Polaroid photographs:

TOP LEFT TOP RIGHT

BOTTOM LEFT BOTTOM RIGHT

Each photo should:

have a white Polaroid frame

have a subtle shadow

be slightly rotated

appear taped/pinned to the scrapbook

Use placeholder photos initially.

The letter body must be editable.

Use the reference's romantic letter content as the target content, but keep it
in siteContent.ts.

The reference letter begins with:

Heyy Babyyyy! ❤️

Happy Boyfriend's Day to the besttt boyfriend in the whole world!

The complete final text can be edited later.

The letter should support:

multiple paragraphs

line breaks

emojis

readable body text

13. BOUQUET EXPERIENCE

Clicking the bouquet should reproduce the romantic bouquet state shown in the
reference.

Main romantic phrase:

I have the most handsome bf <3

Use handwritten-style typography.

The screen also contains:

cute illustration

bouquet

small handwritten/decorative element

graph-paper scrapbook background

blue/navy decorations

Most importantly, reproduce the bouquet interaction/animation.

The reference demonstrates a strong bouquet enlargement/zoom effect.

Expected behavior:

CLICK BOUQUET ↓ BOUQUET BECOMES PROMINENT ↓ SCALES/ZOOMS TOWARD VIEWER ↓ PLAYFUL
TRANSITION ↓ RETURN TO GIFT SELECTION

Use Framer Motion or carefully tuned CSS.

The animation must feel intentional and smooth.

14. GIFT BOX → FINAL SCREEN

Clicking the gift box opens the final romantic/music screen.

Background:

cream graph paper

scrapbook frame

blue/navy decorative elements

LEFT SIDE

A dark navy/blue artwork containing a vinyl record.

Romantic text:

AND SUDDENLY, ALL THE LOVE SONGS WERE ABOUT you ♡

Reproduce the reference's line arrangement and typography as closely as
possible.

RIGHT SIDE

A tilted white/cream paper card with thick blue framing.

Main text:

I LOVE YOU

Below it:

Cute character/illustration.

Additional message:

Soooooo....! MUCH ♥

Keep the card slightly rotated like a physical scrapbook element.

15. MUSIC PLAYER

The final screen includes a custom music player.

It should visually resemble the reference.

Include:

album-art placeholder

song title

artist

play/pause button

any visible progress/detail shown by the reference

Reference metadata:

Tu Hi Mera Pritam Chakraborty

Use HTML5 Audio behind the custom UI.

Requirements:

no browser-native audio controls

no autoplay before user interaction

play button starts audio

pause button pauses audio

UI reflects actual playback state

audio source comes from siteContent.ts

16. SCRAPBOOK COMPONENT SYSTEM

Create reusable components for recurring visual elements.

Suggested:

ScrapbookFrame ScrapbookBackground DecorativeElements DecorativeStars
PrimaryButton PaperCard PolaroidPhoto GiftItem MusicPlayer PageTransition

Do not duplicate the entire scrapbook frame on every screen.

Use shared CSS variables for the visual system.

17. RECOMMENDED PROJECT STRUCTURE

Use a structure similar to:

src/ ├── components/ │ ├── ScrapbookFrame.tsx │ ├── ScrapbookBackground.tsx │
├── DecorativeElements.tsx │ ├── PrimaryButton.tsx │ ├── PolaroidPhoto.tsx │ ├──
GiftItem.tsx │ ├── MusicPlayer.tsx │ └── PageTransition.tsx │ ├── screens/ │ ├──
IntroScreen.tsx │ ├── AcceptGiftScreen.tsx │ ├── SadResponseScreen.tsx │ ├──
GiftSelectionScreen.tsx │ ├── LetterScreen.tsx │ ├── BouquetScreen.tsx │ └──
FinalGiftScreen.tsx │ ├── config/ │ └── siteContent.ts │ ├── styles/ │ ├──
globals.css │ ├── scrapbook.css │ └── animations.css │ ├── App.tsx └── main.tsx

public/ └── assets/ ├── photos/ ├── gifts/ ├── illustrations/ └── music/

Adapt this if the existing repository has a better architecture.

Do not unnecessarily rewrite an already-correct project structure.

18. RESPONSIVENESS

The reference's desktop/wide composition is the primary target.

After desktop fidelity is achieved, support:

laptop

tablet

mobile

Test approximately:

1920 × 1080 1440 × 900 1280 × 800 768 × 1024 430 × 932 390 × 844

Mobile must:

avoid horizontal overflow

keep buttons usable

keep text readable

keep gifts clickable

allow the letter to scroll

keep music controls usable

preserve the scrapbook aesthetic

Do not merely scale the desktop page down.

19. TYPOGRAPHY

Use typography that resembles the reference.

There should be distinct visual treatments for:

Main display heading

Handwritten romantic text

Letter/body text

Buttons

Music player

Potential font directions may include handwritten/retro/typewriter families, but
choose based on visual comparison rather than blindly using a named font.

Typography is part of visual fidelity.

20. ASSET ARCHITECTURE

Use:

public/assets/photos/ public/assets/gifts/ public/assets/illustrations/
public/assets/music/

Example:

public/assets/photos/placeholder-1.jpg public/assets/photos/placeholder-2.jpg
public/assets/photos/placeholder-3.jpg public/assets/photos/placeholder-4.jpg

public/assets/gifts/placeholder-envelope.png
public/assets/gifts/placeholder-bouquet.png
public/assets/gifts/placeholder-gift-box.png

public/assets/illustrations/placeholder-character.png
public/assets/illustrations/placeholder-vinyl.png
public/assets/illustrations/placeholder-card.png

public/assets/music/placeholder.mp3

Never embed personal images as base64.

21. VISUAL QA PROCESS

For every major screen:

Run the website.

Navigate to the relevant state.

Inspect the rendered page.

Compare it with the corresponding reference frame.

Identify the largest mismatch.

Fix it.

Re-render.

Repeat.

When comparing, prioritize:

P0

Broken/missing functionality.

P1

Wrong screen or major structure.

P2

Wrong position or dimensions.

P3

Wrong typography, colors, spacing, shadows.

P4

Small decorative differences.

Do not spend an iteration perfecting a tiny shadow while a major element is
positioned incorrectly.

22. RALPH EXECUTION BEHAVIOR

At the start of every iteration:

Read docs/tasks/PRD.md.

Read docs/tasks/docs.md.

Read docs/tasks/tasks.md.

Read docs/tasks/progress.txt.

Inspect the current code.

Identify the first incomplete task whose dependencies are satisfied.

Then:

SELECT ONE TASK ↓ IMPLEMENT ↓ VERIFY ↓ FIX FAILURES ↓ VISUAL CHECK IF APPLICABLE
↓ UPDATE progress.txt

Do NOT implement unrelated future tasks in the same iteration unless required as
a direct dependency.

Do NOT mark a task complete without verification.

23. VERIFICATION

For implementation tasks, use the project's available checks.

At minimum, when applicable:

npm run build

For visual tasks, run the app and inspect the actual rendered result.

For interaction tasks, manually exercise the interaction.

Do not report:

PASS

unless it was actually checked.

24. PERSONALIZATION MUST NOT HAPPEN YET

During the initial Ralph Loop:

DO NOT:

request real photos

request personal images

request final music

replace placeholders with personal assets

The target of this phase is:

REFERENCE ↓ HIGH-FIDELITY PLACEHOLDER WEBSITE ↓ RALPH VISUAL REFINEMENT ↓ FULLY
FUNCTIONAL EDITABLE WEBSITE

Personal assets will be introduced only after this phase is complete.

25. DEFINITION OF DONE

The website is complete only when:

Functional

Intro works.

Continue works.

Yes works.

No works.

Sad response works.

Try Again works.

Gift selection works.

Envelope works.

Letter works.

Bouquet works.

Bouquet animation works.

Gift box works.

Final screen works.

Music player works.

Play/pause works.

No dead-end state exists.

Visual

Intro resembles reference.

Acceptance screen resembles reference.

Sad screen resembles reference.

Gift-selection screen resembles reference.

Letter resembles reference.

Bouquet experience resembles reference.

Final screen resembles reference.

Music player resembles reference.

Scrapbook frame is consistent.

Typography is visually close.

Colors are visually close.

Major decorations are present.

Major animations resemble reference.

Technical

npm run build passes.

No broken imports.

No missing placeholder assets.

No major console errors.

Responsive layout works.

Personal content is centralized.

Personal assets are replaceable.

README exists.

Project remains maintainable.

26. FINAL PERSONALIZATION READINESS

Before declaring the project complete, verify that I can later replace:

placeholder photos placeholder gift artwork placeholder illustrations
placeholder audio placeholder letter placeholder names placeholder captions

without changing the underlying layout architecture.

The final project must separate:

WEBSITE ENGINE

- components
- screens
- state
- styling
- animation
- interaction

PERSONAL CONTENT

- names
- messages
- photos
- music
- artwork
- captions

27. IMPORTANT ANTI-DRIFT RULE

If a later task asks you to modify a component that is already visually correct:

Preserve existing correct behavior and styling.

Do not accidentally redesign previously completed screens.

Every iteration must be regression-aware.

After changing shared components, check the screens that depend on them.

28. IMPORTANT ANTI-HALLUCINATION RULE

If you are uncertain about a visual detail:

Inspect the reference again.

Inspect surrounding frames.

Prefer evidence from the reference over assumptions.

Do not invent an elaborate replacement.

If the exact original asset is unavailable, use a placeholder that preserves its
approximate:

silhouette

size

position

aspect ratio

visual weight

29. FINAL OUTCOME

The final result should be a polished digital Boyfriend's Day scrapbook.

The recipient experience should feel like:

A SURPRISE ↓ A PLAYFUL QUESTION ↓ "ACCEPT MY GIFT" ↓ CHOOSING BETWEEN THREE
GIFTS ↓ A PERSONAL LETTER ↓ A CUTE BOUQUET MOMENT ↓ A FINAL "I LOVE YOU" ↓ MUSIC

The site should feel handmade and personal while the underlying implementation
remains clean and editable.

FINAL COMMAND TO RALPH

Work through docs/tasks/tasks.md one task at a time.

Use this prompt as the behavioral and product-specific context.

Use docs/tasks/PRD.md for detailed product requirements.

Use docs/tasks/docs.md for agent operating rules.

Use docs/tasks/progress.txt for persistent state.

Use the reference video as the visual source of truth.

Do not stop at "it works."

Continue until the implementation is both:

FUNCTIONALLY COMPLETE

and

VISUALLY CLOSE TO THE REFERENCE.
