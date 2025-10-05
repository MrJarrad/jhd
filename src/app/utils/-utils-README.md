# Utils

Utils extend the design system with **non-token utilities** for interaction, animation, and integration.

## Files

- **motion/** → animation utilities (fade, slide, reveal, pulse, parallax, smooth scroll, GSAP hooks).
- **fonts/** → font-face definitions mapped to tokens (`--ff-sans`).

## Principles

- Utilities reference tokens where applicable (`var(--token)` for durations, fonts, easing).
- Keep utilities portable for Builder.io and React usage.
- Each subfolder has its own `README.md` with detail and examples.

## Default (md)

- Motion utilities and font tokens assume `(md = default)` for timing, duration, or size values unless specified otherwise.
