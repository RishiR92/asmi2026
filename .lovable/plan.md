
# Plan: Restructure Layout Like Build Forever for Better Text Visibility

## Overview

Restructure the landing page to follow Build Forever's layout pattern where text content sits in the upper portion with a solid cream background, and the video/landscape fills the bottom portion. This ensures perfect text readability while maintaining the peaceful background aesthetic.

## Current Issues

- Text is overlaid directly on the video with gradient overlay, causing visibility issues
- All content is centered vertically in the viewport
- Text sizes are relatively small for the vision statement

## Proposed Layout Structure

```text
+----------------------------------+
|  [Navigation: asmi ... Team]     |
|                                  |
|            asmi                  |  <- Solid cream
|    a personal intelligence       |  <- background area
|                                  |
|  The AI that understands your    |
|     life as a complete system.   |
|                                  |
|   [Email input] [Join Waitlist]  |
|                                  |
+----------------------------------+
|                                  |
|     [Video Background with       |  <- Video fills
|      peaceful landscape and      |  <- bottom portion
|      discarded gadgets]          |
|                                  |
+----------------------------------+
|        (c) 2025 Asmi             |
+----------------------------------+
```

## Technical Changes

### 1. Index.tsx - Restructure Layout

**Remove navigation from Index** (it will be repositioned):
- Remove the Navigation component from the main content flow

**Create two-section layout**:
- **Top section**: Solid cream background with all text content and waitlist form
  - Remove `flex-1 justify-center` from main
  - Position content in upper portion with proper padding
  - Use `pt-20 md:pt-28` for top spacing below nav
  
- **Bottom section**: Video background filling remaining viewport height
  - Move video to a container that takes ~40-50% of viewport
  - Remove video overlay opacity, let it show more clearly
  - Keep subtle top gradient for smooth transition

**Typography updates**:
- Increase vision statement from `text-sm md:text-base` to `text-base md:text-lg`
- Increase secondary text similarly
- Use `max-w-xl` or `max-w-2xl` for better line length

### 2. Navigation.tsx - Hide Logo on Index

Since "asmi" appears as the main headline, hide the nav logo on the index page:
- Keep only the "Team" link on the right side for index page
- Show full logo + link on other pages

### 3. Responsive/Mobile Optimization

- Mobile: Video takes less height, more focus on text
- Use `min-h-[40vh] md:min-h-[50vh]` for video section
- Proper padding: `px-6` on mobile, `px-10` on desktop
- Stack elements with appropriate vertical spacing

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Restructure layout: solid background for text, video below |
| `src/components/Navigation.tsx` | Conditionally hide logo on index page |

## Expected Result

- Text will be perfectly readable on solid cream background
- Video plays peacefully in the lower portion of the viewport
- Layout mirrors Build Forever's elegant composition
- Mobile-optimized with proper text sizing and spacing
- Maintains single-page, no-scroll design
