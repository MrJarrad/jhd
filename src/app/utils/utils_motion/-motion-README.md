# Motion

Motion utilities provide **reusable animation patterns** for components and sections.  
They combine **Framer Motion** and **GSAP** for consistent interactions.

## Files

- **animations/** → fade, slide, reveal, pulse, stagger.
- **presets/** → spring configs, easing curves.
- **hooks/** → `useStagger`, `useScrollReveal`.
- **smooth/** → Lenis smooth scroll integration with GSAP sync.
- **components/** → MotionBox (motion primitive wrapper).
- **parallax.ts** → parallax helper for backgrounds/elements.
- **gsap.ts** → GSAP core + plugin registration.

## Principles

- Use abstracted `Variants` for reuse across components.
- Keep configs (spring, easing) centralized.
- Hooks provide CMS-ready interaction patterns.
- Respect tokens for duration, easing, and timing where applicable.

## Abbreviations

- `fx` = effect  
- `tr` = transition  
- `st` = stagger  
- `sp` = spring  
- `ez` = easing  
- `px` = parallax  

## Default (md)

- The `md` config is treated as the default for animations (durations, easing, spring tension).
