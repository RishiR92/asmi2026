
# Plan: Mobile-First Optimization with Text & Video Improvements

## Overview

Update the landing page to be mobile-first with better typography scaling, improved video visibility for discarded devices, and remove/update text as requested.

## Text Changes

1. **Remove**: "Not another app. A Living Context Engine that infers your current state and executes with precision."
2. **Update**: Change "a personal intelligence" to "building personal intelligence"

## Video Section Improvements

The discarded devices (laptops, phones) need to be visible in the video. Currently, the video uses `object-cover` which crops the video to fill the container. This can cut off important parts of the video (like the devices at the bottom/sides).

**Solution:**
- Change video from `object-cover` to `object-contain` on mobile, or use `object-position` to ensure the devices remain visible
- Use `object-bottom` or `object-center` positioning to keep devices in frame
- Add opacity/brightness adjustment to make video less bright (e.g., `opacity-80` or CSS filter)
- Increase minimum video section height to show more of the video content

## Mobile-First Typography

Current text sizes are large and can feel "zoomed in" on mobile. Adjustments:

| Element | Current | Mobile-First |
|---------|---------|--------------|
| Headline "asmi" | `text-6xl md:text-7xl lg:text-8xl` | `text-5xl md:text-6xl lg:text-7xl` |
| Tagline | `text-xl md:text-2xl` | `text-lg md:text-xl` |
| Vision statement | `text-base md:text-lg` | `text-sm md:text-base` |

## Video Contrast/Brightness

Add a subtle dark overlay or reduce brightness to make the video less bright:
- Apply `brightness-90` or `opacity-80` filter to video
- Optionally add a subtle overlay div with low opacity

## Responsive Video Container

Ensure video section adapts well across screen sizes:
- Mobile: Taller minimum height to show more video content (`min-h-[45vh]`)
- Use `object-position: center bottom` or custom positioning to keep devices visible
- Consider aspect ratio approach for very small screens

## Technical Changes

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Remove secondary text line, update tagline, adjust typography sizes, improve video container responsiveness, add video opacity/brightness filter |

## Expected Result

- Cleaner copy with updated tagline
- Better mobile typography that doesn't feel oversized
- Discarded devices clearly visible in video across all screen sizes
- Slightly muted video brightness for better visual balance
- Fully responsive single-page layout
