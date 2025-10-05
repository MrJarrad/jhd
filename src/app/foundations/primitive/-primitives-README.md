# Primitives

Primitives are the **raw design tokens** that act as the single source of truth across the design system.  
They never reference other tokens, only raw values.

## Files

- **primitive-core.css** → dimensions, radius, border width, opacity, viewport height.
- **primitive-typography.css** → font sizes, line heights, letter spacing, font weights.
- **primitive-color-palette.css** → color palette (brand, neutrals, functional colors).
- **primitive-social.css** → social/brand colors (e.g. Facebook, LinkedIn, Instagram, X).

## Principles

- Raw, unopinionated values only.
- Always reference these tokens in base → semantic → components.
- No themes or responsive logic here.

## Abbreviations

- **Social Colors**
  - `fb` = Facebook
  - `li` = LinkedIn
  - `ig` = Instagram
  - `x`  = Twitter / X
