# Executable Task Queue — Boyfriend's Day Website

> This file is the executable task queue for Ralph Loop.
>
> Ralph should complete ONE task per iteration.
>
> Do not skip ahead unless a task's dependency is already satisfied.
>
> The detailed product specification is in `docs/tasks/PRD.md`.
> Agent operating instructions are in `docs/tasks/docs.md`.
> Persistent execution history is in `docs/tasks/progress.txt`.

---

## Phase 0 — Project foundation

## Task 1: Inspect repository and reference assets

Read `docs/tasks/PRD.md` and inspect the entire repository.

Locate the reference video and any supplied reference frames/assets.

Determine:

- current project status,
- existing framework,
- existing scripts,
- existing assets,
- reference media location.

Create or update `docs/tasks/REFERENCE_ANALYSIS.md` with a concise inventory of the reference screens and major visual details.

Acceptance criteria:
- Repository structure is understood.
- Reference video/media is located.
- Distinct website states are documented.
- Social-media recording UI is explicitly excluded.
- No application feature is unnecessarily implemented in this task.

Verification:
- Confirm the analysis file exists.
- Confirm the reference media path is documented.

---

## Task 2: Initialize frontend application

Create or complete the React + TypeScript + Vite application foundation.

Requirements:
- React
- TypeScript
- Vite
- minimal dependencies
- clean development/build scripts

Acceptance criteria:
- `npm install` succeeds.
- `npm run dev` can start the application.
- `npm run build` succeeds.
- A minimal application renders.

Do not implement the complete website yet.

---

## Task 3: Create project architecture

Create a maintainable directory structure for:

- screens
- reusable components
- configuration
- styles
- assets

Suggested structure:

```text
src/
  components/
  screens/
  config/
  styles/
  App.tsx
  main.tsx

public/
  assets/
    photos/
    gifts/
    illustrations/
    music/
```

Acceptance criteria:
- Architecture exists.
- Imports remain clean.
- No unnecessary backend infrastructure is added.
- Build passes.

---

## Task 4: Create placeholder asset system

Create the placeholder-first asset structure.

Required directories:

```text
public/assets/photos/
public/assets/gifts/
public/assets/illustrations/
public/assets/music/
```

Create clearly named placeholder assets or suitable temporary local assets for:

- four photos,
- envelope,
- bouquet,
- gift box,
- character,
- vinyl,
- final card/artwork,
- audio.

Acceptance criteria:
- All required placeholder paths exist.
- Assets are local.
- Components can later replace them without structural changes.
- Build passes.

---

## Task 5: Create centralized editable content configuration

Create:

`src/config/siteContent.ts`

Centralize:

- intro copy,
- acceptance screen copy,
- gift selection title,
- letter text,
- photo paths,
- gift paths,
- bouquet copy,
- final message,
- music title,
- artist,
- audio source.

Mark the editable section clearly.

Acceptance criteria:
- Personal/customizable content is not duplicated throughout components.
- Components can consume configuration.
- Placeholder values are used initially.
- TypeScript/build passes.

---

# Phase 1 — Visual foundation

## Task 6: Implement global visual system

Create the global scrapbook visual system.

Implement:

- CSS variables,
- color palette,
- graph-paper background,
- paper textures where practical,
- typography classes,
- shadows,
- common spacing,
- common rounded shapes,
- common scrapbook border treatment.

Acceptance criteria:
- The visual tokens are centralized.
- The background resembles the reference.
- No generic SaaS styling is introduced.
- Build passes.

---

## Task 7: Implement reusable scrapbook components

Create reusable components such as:

- `ScrapbookFrame`
- `ScrapbookBackground`
- `DecorativeElements`
- `PrimaryButton`
- `PolaroidPhoto`
- `GiftItem`
- `PaperCard`
- `PageTransition`

Acceptance criteria:
- Components are reusable.
- Shared decorations are not duplicated unnecessarily.
- Components accept appropriate props.
- Build passes.

---

# Phase 2 — Intro and acceptance flow

## Task 8: Implement Intro screen

Implement the reference intro screen.

Requirements:

- dark navy scrapbook background,
- large Boyfriend's Day title,
- decorative stars/doodles,
- camera/decorative elements visible in reference,
- centered/bottom CONTINUE button.

Acceptance criteria:
- Composition resembles reference.
- Placeholder decorative assets are used where needed.
- CONTINUE changes state without page reload.
- Build passes.

---

## Task 9: Implement Accept Gift screen

Implement:

`PLEASE ACCEPT THE GIFT`

Include:

- cream graph-paper background,
- scrapbook frame,
- cute placeholder character,
- YES button,
- NO button,
- reference decorations.

Acceptance criteria:
- Layout resembles reference.
- YES and NO are real accessible buttons.
- Both buttons trigger their intended states.
- Build passes.

---

## Task 10: Implement NO / Sad Response flow

Implement the sad response state.

Include:

- `WHY DID YOU CLICK NO!`
- crying placeholder character,
- tears,
- blue puddle,
- `TRY AGAIN` button.

Acceptance criteria:
- NO opens the sad response.
- TRY AGAIN returns to Accept Gift.
- User cannot become trapped.
- Transition is visually appropriate.
- Build passes.

---

## Task 11: Implement YES transition and state machine

Implement the complete state flow through:

```text
INTRO
→ ACCEPT_GIFT
→ SAD_RESPONSE
→ ACCEPT_GIFT
→ CHOOSE_GIFTS
```

Use simple React state/state-machine logic.

Acceptance criteria:
- No full page reload is needed.
- State transitions are deterministic.
- Back/return behavior does not corrupt state.
- Build passes.

---

# Phase 3 — Gift selection

## Task 12: Implement Choose Your Gifts screen

Implement the reference gift-selection screen.

Include:

- `Choose Your Gifts`
- cream graph-paper background,
- scrapbook frame,
- envelope,
- bouquet,
- gift box.

Requirements:
- gift objects should feel like physical scrapbook objects,
- no generic card containers,
- subtle hover/touch response.

Acceptance criteria:
- Three gifts are visible in the correct relative arrangement.
- All three are clickable.
- Layout is responsive.
- Build passes.

---

## Task 13: Implement Gift navigation

Connect the three gift objects to their screens:

- envelope → letter,
- bouquet → bouquet experience,
- gift box → final gift.

Acceptance criteria:
- Each gift opens the correct state.
- No broken paths.
- Return behavior is defined and functional.
- Build passes.

---

# Phase 4 — Letter

## Task 14: Implement letter paper composition

Create the letter screen.

Include:

- large cream/tan paper,
- irregular/torn visual edge,
- paper shadow,
- scrapbook frame,
- four Polaroid placeholders.

Position photos:

- top-left,
- bottom-left,
- top-right,
- bottom-right.

Acceptance criteria:
- Paper is visually close to reference.
- Polaroids have slight individual rotations.
- Photos use placeholder assets.
- Layout is responsive.
- Build passes.

---

## Task 15: Implement editable letter content

Add the letter content from `siteContent.ts`.

Requirements:
- support paragraphs,
- line breaks,
- emojis,
- readable typography.

Acceptance criteria:
- Text is not hardcoded into the screen component.
- Editing `siteContent.ts` changes the letter.
- Letter remains visually readable.
- Build passes.

---

## Task 16: Refine letter visual fidelity

Compare the letter screen with the reference.

Refine:

- paper dimensions,
- photo sizes,
- rotations,
- spacing,
- tape/sticker placement,
- typography,
- shadows,
- decorative elements.

Acceptance criteria:
- Major visual mismatches are removed.
- No functional regressions.
- Build passes.

---

# Phase 5 — Bouquet

## Task 17: Implement bouquet screen

Create the bouquet experience.

Include:

- romantic handwritten heading,
- placeholder bouquet,
- cute placeholder illustration,
- scrapbook decorations,
- graph-paper background.

Acceptance criteria:
- Composition resembles reference.
- Content is editable.
- Build passes.

---

## Task 18: Implement bouquet zoom animation

Recreate the bouquet enlargement/zoom interaction.

Requirements:
- smooth start,
- prominent scale increase,
- controlled movement,
- appropriate easing,
- no abrupt jump.

Acceptance criteria:
- Animation works reliably.
- It does not cause horizontal overflow.
- It does not leave the app in a broken state.
- Return to gift selection works if required by reference.
- Build passes.

---

## Task 19: Refine bouquet visual fidelity

Compare the bouquet state and animation against the reference.

Refine:

- bouquet size,
- position,
- text position,
- illustration position,
- timing,
- easing,
- surrounding decorations.

Acceptance criteria:
- Major visual mismatches are resolved.
- Build passes.

---

# Phase 6 — Final gift and music

## Task 20: Implement final gift screen

Create the final romantic screen.

Include:

Left:
- dark navy vinyl artwork,
- romantic text.

Right:
- tilted white/cream card,
- blue border,
- `I LOVE YOU`,
- cute placeholder illustration,
- final romantic phrase.

Acceptance criteria:
- Layout resembles reference.
- Placeholder assets are used.
- Content comes from configuration.
- Build passes.

---

## Task 21: Implement custom music player

Create a custom music player.

Include:

- album art placeholder,
- song title,
- artist,
- play/pause control,
- any visible progress/visual element supported by the reference.

Use HTML5 Audio.

Requirements:
- no browser-native controls,
- no automatic audio playback before user interaction,
- play toggles audio,
- pause toggles audio,
- button state reflects actual audio state.

Acceptance criteria:
- Audio can play.
- Audio can pause.
- UI reflects state.
- Audio source is configurable.
- Build passes.

---

## Task 22: Refine final screen visual fidelity

Compare the final screen with the reference.

Refine:

- vinyl artwork dimensions,
- text hierarchy,
- card rotation,
- card size,
- music player dimensions,
- spacing,
- decorative elements,
- shadows.

Acceptance criteria:
- Major visual differences are resolved.
- Build passes.

---

# Phase 7 — Navigation and polish

## Task 23: Implement complete end-to-end flow

Test:

```text
INTRO
→ CONTINUE
→ ACCEPT GIFT
→ NO
→ SAD RESPONSE
→ TRY AGAIN
→ ACCEPT GIFT
→ YES
→ CHOOSE GIFTS
→ ENVELOPE
→ LETTER
→ RETURN
→ BOUQUET
→ BOUQUET ANIMATION
→ RETURN
→ GIFT BOX
→ FINAL GIFT
→ PLAY MUSIC
→ PAUSE MUSIC
```

Acceptance criteria:
- Every step works.
- No dead-end state.
- No page reload required.
- No state corruption.
- Build passes.

---

## Task 24: Desktop visual QA

Perform visual QA at approximately:

- 1920 × 1080
- 1440 × 900
- 1280 × 800

Compare all major screens to the reference.

Fix, in order:

1. structure,
2. major positioning,
3. dimensions,
4. typography,
5. colors,
6. decorative details.

Acceptance criteria:
- All major screens have been visually inspected.
- Major discrepancies are fixed.
- Build passes.

---

## Task 25: Mobile and tablet responsiveness

Test approximately:

- 390 × 844
- 430 × 932
- 768 × 1024

Requirements:
- no unintended horizontal overflow,
- buttons remain accessible,
- text remains readable,
- gifts remain clickable,
- letter can scroll,
- music player remains usable.

Acceptance criteria:
- No broken layout.
- No clipped essential content.
- Build passes.

---

## Task 26: Accessibility and interaction polish

Improve:

- semantic buttons,
- alt text,
- keyboard interaction,
- focus states,
- touch target sizes,
- accessible labels.

Do not compromise the visual design.

Acceptance criteria:
- Interactive objects are keyboard/touch usable.
- Images have appropriate alt text.
- Build passes.

---

## Task 27: Performance and cleanup

Review the project for:

- unnecessary dependencies,
- duplicate CSS,
- oversized local assets,
- unnecessary rerenders,
- animation performance,
- stale code,
- unused imports.

Acceptance criteria:
- Project remains lightweight.
- No unnecessary infrastructure.
- Build passes.
- No major console errors.

---

# Phase 8 — Personalization readiness

## Task 28: Finalize editable content architecture

Verify that all personal content can be changed from `src/config/siteContent.ts`.

Check:

- letter,
- names,
- captions,
- photos,
- gift images,
- bouquet text,
- final text,
- music metadata,
- audio source.

Acceptance criteria:
- No personal copy is accidentally hardcoded in screen components.
- Placeholder replacement requires no layout rewrite.
- Build passes.

---

## Task 29: Create customization README

Create/update `README.md`.

Explain:

1. how to run the site,
2. how to build it,
3. where to change text,
4. where to replace photos,
5. where to replace gift artwork,
6. where to replace music,
7. where to change colors,
8. where to change fonts,
9. how to deploy.

Acceptance criteria:
- A beginner can personalize the site by following README instructions.
- Build passes.

---

# Phase 9 — Final QA

## Task 30: Full regression test

Run the complete application from a clean start.

Verify:

- all screens,
- all buttons,
- all gift interactions,
- all transitions,
- audio,
- responsive layouts,
- placeholder assets,
- content configuration.

Acceptance criteria:
- Complete flow passes.
- `npm run build` passes.
- No major console errors.
- No broken images.
- No dead ends.

---

## Task 31: Final reference comparison

Perform a final visual comparison against the reference video.

Review every major state.

Fix any remaining high-impact differences in:

- composition,
- spacing,
- typography,
- colors,
- imagery,
- animation,
- scrapbook details.

Acceptance criteria:
- Every major state has been inspected.
- No known high-impact visual mismatch remains.
- Build passes.

---

## Task 32: Final project handoff

Ensure the project contains:

```text
README.md
docs/tasks/PRD.md
docs/tasks/docs.md
docs/tasks/tasks.md
docs/tasks/progress.txt
docs/tasks/REFERENCE_ANALYSIS.md
src/config/siteContent.ts
public/assets/
```

Verify:

- placeholder-first architecture remains intact,
- no personal assets are required,
- project runs from a fresh install,
- build succeeds,
- README is accurate.

Acceptance criteria:
- Project is ready for personal asset replacement.
- Build passes.
- All previous tasks are complete.
