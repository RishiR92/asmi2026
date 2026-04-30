# Plan: Three-Act Scroll Story for Asmi Landing Page

## Overview

Transform the current single-viewport landing page into a vertical, scroll-based three-act narrative. Each act is a full-viewport section with its own background video and a short caption that builds the story:

1. **The Overwhelm** — User wakes up, mental clutter of tasks appears
2. **The Handoff** — User talks to Asmi, Asmi absorbs everything, plate clears
3. **The Freedom** — User lives life, Asmi sends quiet updates as tasks complete

The hero (headline + waitlist) stays on top; the three acts sit below it. The page becomes scrollable for the first time.

---

## Page Structure

```text
┌──────────────────────────────────────────┐
│  HERO (cream bg)                         │
│   asmi · building personal intelligence  │
│   tagline + waitlist                     │
├──────────────────────────────────────────┤
│  ACT 1 — video: morning + task clutter   │
│   "Every morning, the list begins."      │
├──────────────────────────────────────────┤
│  ACT 2 — video: handing off to Asmi      │
│   "Tell Asmi once. She takes it all."    │
├──────────────────────────────────────────┤
│  ACT 3 — video: living life + updates    │
│   "Go live your day. She'll handle it."  │
├──────────────────────────────────────────┤
│  FOOTER (© 2025 Asmi)                    │
└──────────────────────────────────────────┘
```

Each act = `min-h-screen`, video as full-bleed background, caption overlaid bottom-left or center with a subtle dark/cream gradient for legibility.

---

## Act Details

### Act 1 — The Overwhelm
- **Visual**: Soft morning light through linen curtains, an unmade bed, a person sitting up rubbing their eyes. Around them, faint floating handwritten notes / sticky-note shapes drift into frame: "call plumber", "book dentist", "movers?", "CPA reply", "salon", "boxes". Warm but slightly cluttered.
- **Caption**: *"Every morning, the list begins."*
- **Mood**: Warm cream with a hint of weight, gentle unease.

### Act 2 — The Handoff
- **Visual**: Same person, now relaxed at a kitchen counter with coffee, speaking softly (no phone visible — voice in the air). The floating notes from Act 1 drift toward an unseen point and dissolve into warm light. Plate visibly clears.
- **Caption**: *"Tell Asmi once. She takes it all."*
- **Mood**: Calm, exhale, relief.

### Act 3 — The Freedom
- **Visual**: The person walking through a sunlit street / park / market, hands free, smiling. In the background, soft hints of life resolving — a plumber's van, a flower delivery, stacked moving boxes on a porch, a salon door opening. Occasional soft golden notification glints drift past like fireflies (no UI shown).
- **Caption**: *"Go live your day. She'll handle it."*
- **Mood**: Aspirational, free, golden-hour.

All three videos: 21:9, 1080p, 10s, seamless loop, warm cream/honey/beige palette, editorial cinematic, no on-screen text, no logos, no phone screens.

---

## Caption Styling

- Font: Instrument Serif italic (matches existing headers)
- Size: `text-3xl md:text-5xl`
- Color: cream/foreground with subtle text shadow for legibility on video
- Positioned bottom-left with generous padding, fade-in on scroll into view

---

## Technical Implementation

| File | Change |
|------|--------|
| `src/assets/hero-bg.mp4.asset.json` | Keep (becomes Act 3 — already matches "freedom" scene). Rename usage to `act3-bg`. |
| `src/assets/act1-bg.mp4.asset.json` | New — generate Act 1 morning-overwhelm video |
| `src/assets/act2-bg.mp4.asset.json` | New — generate Act 2 handoff video |
| `src/assets/act3-bg.mp4.asset.json` | New — re-generate cleaner Act 3 video (or reuse current hero-bg) |
| `src/components/StorySection.tsx` | New reusable component: `<StorySection video caption />` with full-viewport video bg + overlaid caption + scroll fade-in |
| `src/pages/Index.tsx` | Remove single bottom video. Add three `<StorySection>` blocks under hero. Make page scrollable (remove `overflow-hidden` and `h-full`). Keep footer at bottom. |
| `src/components/Navigation.tsx` | No change (still shows Team link). Optionally keep nav fixed with subtle backdrop on scroll. |

### Layout changes in `Index.tsx`
- Outer wrapper: change from `flex h-full flex-col overflow-hidden` to `flex flex-col min-h-screen` (allow native scroll)
- Hero block: keep as-is, becomes first viewport (`min-h-screen` with cream bg, no video)
- Three `<StorySection>` follow
- Footer moves out of video, becomes its own bottom strip

### Scroll-in animation
- Use `IntersectionObserver` (or simple `whileInView` pattern via tailwind + a small hook) to fade/slide in each caption when its section enters viewport
- No external lib needed — small custom hook in `StorySection.tsx`

---

## Out of Scope
- No new pages or routes
- No changes to Team page
- No audio on videos
- No interactive scroll-pinning or scrubbing (just normal scroll with autoplay-loop videos)

---

## Expected Result

A landing page that *tells the Asmi story in three breaths*: the chaos of life, the handoff, and the freedom that follows. Each act is its own cinematic moment with a single-line caption. Visitors scroll through the promise of the product before they ever see a feature list.
