

# Plan: Update Video Composition and Redesign Team Page

## Overview

Two main changes:
1. Regenerate background video with wider landscape composition where devices are visible but not dominant
2. Redesign Team page to show founder profiles as narrative paragraphs instead of bullet points, with highlighted team origin statement

---

## 1. Video Regeneration

### Current Issue
The video is too zoomed in on the devices, losing the serene landscape aesthetic that worked well in the previous version.

### Solution
Regenerate `src/assets/hero-bg.mp4` with:

**Composition:**
- Wide establishing shot of peaceful natural landscape (meadow with mountains/sky)
- Camera positioned at mid-distance, showing the full scene
- Broken/damaged devices (laptop, smartphone) placed naturally in the lower portion of frame
- Devices occupy ~20-25% of frame, landscape fills ~75-80%

**Device Placement:**
- Positioned in foreground corners or lower third
- Clean but clearly not in use (cracked screen, slightly dusty)
- Static on natural surface (rock, grass)
- Always visible regardless of video crop/aspect ratio

**Movement:**
- Gentle grass and plants swaying in breeze
- Soft clouds drifting in background
- Golden hour lighting with subtle warmth
- Looping seamlessly

---

## 2. Team Page Redesign

### Current State
- Founder descriptions are bullet point lists
- Team origin statement is small, at the bottom

### Changes to Team.tsx

**Founder Profiles - Convert to Paragraphs:**

**Rishi's story (paragraph format):**
> Built and exited India's largest full-stack vertical e-commerce platform with $400M in annualized sales. Raised $100M backed by founders from DoorDash and Zoom. Built products reaching 500M+ consumers at Flipkart ($16B acq by Walmart). Recognized as Forbes 30 Under 30 Asia and #9 on Hurun India U35 List.

**Satwik's story (paragraph format):**
> A pioneer in agentic AI and Large Action Models, with experience at FAIR and DeepMind. Holds a PhD from CMU with an award-winning thesis on LAMs. Has published 40+ papers collaborating with AI leaders at Nvidia, Apple, and FAIR. Achieved All India Rank 6 in IIT and is an International Olympiad medalist.

### Changes to TeamMember.tsx

Update the component to accept either:
- A `story` prop (string) for paragraph format
- Or the existing `description` array for backwards compatibility

Replace the bullet point `<ul>` with a flowing `<p>` paragraph when `story` is provided.

### Highlight Team Origin Statement

Move and enhance the "Founding team spans DeepMind, Google..." text:
- Make it more prominent (larger text, better contrast)
- Style it as a highlighted callout
- Use font styling to emphasize the company names

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/assets/hero-bg.mp4` | Regenerate with wider landscape composition, devices visible in corners |
| `src/components/TeamMember.tsx` | Add `story` prop for paragraph-style bio, render as flowing text |
| `src/pages/Team.tsx` | Convert founder data to paragraph format, enhance team origin statement styling |

---

## Expected Result

**Video:**
- Serene, wide landscape as the primary visual
- Broken devices visible but as subtle thematic elements
- Proper aspect ratio handling across all screen sizes

**Team Page:**
- Clean, narrative founder stories that read like profiles
- Professional, editorial feel instead of resume-style bullets
- Prominent highlight of the team's prestigious backgrounds (DeepMind, Google, Amazon, CMU, UC Berkeley)

