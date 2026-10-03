
## Boyfriend's Day Website

You are the implementation agent for the Boyfriend's Day interactive scrapbook website.

The project has three layers of persistent context:

1. `docs/tasks/PRD.md` — product requirements and overall specification.
2. `docs/tasks/tasks.md` — the executable task queue for Ralph Loop.
3. `docs/tasks/progress.txt` — the persistent progress/audit log.

The reference video supplied to the project is the visual source of truth.

---

## 1. Your job on every Ralph iteration

Every iteration must:

1. Read `docs/tasks/PRD.md`.
2. Read `docs/tasks/tasks.md`.
3. Read `docs/tasks/progress.txt` if it exists.
4. Inspect the current repository state.
5. Identify the FIRST incomplete task whose dependencies are satisfied.
6. Complete ONLY that task in the current iteration.
7. Run the task's required verification commands.
8. Fix failures caused by your changes.
9. Append a concise entry to `docs/tasks/progress.txt`.
10. Do not modify completed task descriptions or reorder the task queue.
11. Leave the repository in a working state.

Do not attempt to complete the entire project in one iteration.

---

## 2. Task selection rules

Prefer tasks in the order listed unless a task explicitly depends on another task.

A task is complete only when:

- its implementation is present,
- its acceptance criteria are satisfied,
- verification has passed,
- and the completion is recorded in `progress.txt`.

Never mark a task complete merely because code was written.

---

## 3. Reference-first rule

The reference video has priority over assumptions.

Before implementing a visual screen, inspect the relevant reference frames/video.

Do not:

- redesign the page,
- simplify unusual elements,
- replace scrapbook styling with generic UI,
- invent screens that are not in the reference,
- remove details because they seem decorative.

If a detail is visible in the reference and practical to reproduce, reproduce it.

The social-media/video-platform UI surrounding the recorded website is NOT part of the website and must not be recreated.

---

## 4. Placeholder-first rule

Do not request or wait for the creator's personal photos, personal artwork, or final music.

Use placeholders during this entire initial implementation.

All personal assets must remain replaceable.

Use:

- placeholder photographs,
- placeholder gift artwork,
- placeholder character artwork,
- placeholder vinyl artwork,
- placeholder audio.

Do not hardcode personal assets into React components.

---

## 5. Content separation rule

All personal/customizable content belongs in:

`src/config/siteContent.ts`

Components should consume configuration rather than hardcoding personal text.

Examples of editable content:

- boyfriend name
- letter
- captions
- photos
- gift image paths
- music source
- song title
- artist

---

## 6. Architecture rule

Prefer small, reusable components.

Keep separate:

- screens
- reusable scrapbook components
- content configuration
- assets
- styles
- animation logic

Do not create a giant `App.tsx`.

Do not add a backend, database, authentication, or unnecessary infrastructure.

---

## 7. Visual implementation rule

The site should reproduce the reference's:

- cream graph-paper background
- navy/blue scrapbook framing
- hand-drawn stars/doodles
- paper/card shadows
- handwritten typography
- Polaroid photographs
- irregular rotations
- gift illustrations
- romantic scrapbook composition

Do not substitute generic cards, gradients, glassmorphism, or SaaS-style components.

---

## 8. Animation rule

Animations should be deliberate and reference-driven.

Required interaction categories include:

- page transitions,
- button feedback,
- YES/NO behavior,
- gift hover/touch feedback,
- bouquet zoom/enlargement,
- music play/pause.

Do not add flashy animation that is not supported by the reference.

---

## 9. Verification rule

At minimum, use:

- `npm run build`

when the project supports it.

Also use the appropriate available checks for the current task.

For visual tasks, actually run the website and inspect the result when possible.

Do not claim visual verification without opening/checking the relevant screen.

---

## 10. Visual QA rule

For visual implementation tasks:

1. Run the application.
2. Navigate to the target state.
3. Inspect the rendered result.
4. Compare against the reference.
5. Fix the largest mismatch.
6. Recheck.

Prioritize:

1. broken functionality,
2. wrong structure,
3. wrong element position,
4. wrong dimensions,
5. typography/colors,
6. small visual details.

---

## 11. Do not over-engineer

This is a personal static website.

Do not add infrastructure that is not required.

Prefer simple React state over a state-management library.

Prefer local assets over remote APIs.

Prefer CSS/CSS variables for the visual system.

---

## 12. Progress log format

Append, never overwrite, entries to:

`docs/tasks/progress.txt`

Use:

```text
[YYYY-MM-DD HH:MM] Started: Task X — Task name
[YYYY-MM-DD HH:MM] Completed: Task X — Task name
[YYYY-MM-DD HH:MM] Verification: npm run build — PASS
[YYYY-MM-DD HH:MM] Notes: short summary
```

If blocked:

```text
[YYYY-MM-DD HH:MM] Blocked: Task X — reason
```

Never fabricate a PASS.

---

## 13. Git rule

If Git is available and the Ralph extension expects commits, make a focused commit after a completed task.

Use a descriptive message such as:

`feat: implement scrapbook intro screen`

Do not combine unrelated tasks into one commit.

---

## 14. Final completion rule

The project is complete only when every task in `tasks.md` is complete and verified.

At final completion, ensure:

- all screens work,
- all interactions work,
- placeholders are still replaceable,
- the content configuration is centralized,
- the build passes,
- there are no major console errors,
- the README explains customization,
- the reference has been visually checked.

Only then should the Ralph completion marker be written by the Ralph system.

