

# Plan: Update Background to Calm, Real-World Video with Gadgets

## Overview

Replace the current abstract/futuristic background video with a serene, real-life inspired video featuring:
- Calm, peaceful natural scenery (inspired by Build Forever's landscape aesthetic)
- Mobile phone and laptop placed naturally in the scene as discarded items (broken or in trash) as secondary elements
- Subtle movement (gentle breeze, soft light shifts)
- Light, warm color palette matching the current cream theme

## What Needs to Change

### 1. Generate New Background Video

Create a new video asset (`src/assets/hero-bg.mp4`) with these specifications:

**Scene concept:**
- Serene outdoor setting - soft farms, mountains, minimalist desert, or calm meadow
- A laptop and smartphone discarded casually on a natural surface (stone, sand, trash)
- Devices appear broken and "discarded" - not in active use
- Soft, diffused natural lighting (golden hour or overcast)

**Movement elements:**
- Gentle breeze moving grass or sand particles, or trees
- Soft clouds drifting slowly in background
- Subtle light flickers or shadows
- Perhaps a soft fabric or paper gently moving

**Color palette:**
- Warm cream, beige, soft whites
- Muted earth tones
- Light blue sky with soft clouds
- No harsh colors or high saturation

### 2. Maintain Current Page Structure

The `Index.tsx` structure works well - only the video asset needs replacing:
- Keep the gradient overlay for text readability
- Keep the current opacity and positioning
- The light theme CSS variables are already perfect

## Technical Details

| File | Change |
|------|--------|
| `src/assets/hero-bg.mp4` | Replace with new calm, real-life video featuring gadgets in natural setting |

## Visual Reference

The Build Forever aesthetic shows:
- A vintage Mac computer placed on a white rock
- Serene landscape with autumn-colored shrubs
- Soft blue sky with gentle clouds
- Very minimal, peaceful composition

Our adaptation will use modern gadgets (laptop + phone) in a similar calm, natural environment.

## Expected Result

A landing page that feels:
- Peaceful and grounding (not futuristic or sci-fi)
- Human and personal (discarded gadgets represent less focus on devices and real personal intelligence taking over)
- Timeless and elegant (natural setting, soft colors)
- Highly readable (maintained contrast with gradient overlay)

