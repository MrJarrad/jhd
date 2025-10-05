# Foundations

Foundations define the **base token system** of the design language.  
They follow a dependency chain from raw values to semantic application.

## Files

- **primitives/** → raw tokens (core, typography, color-palette, social).
- **base/** → functional tokens (actions, icons, status colors, effects).
- **semantic/** → contextual tokens (roles for grid, typography, color).

## Principles

- Tokens are layered: primitives → base → semantic.
- Always reference a lower-level token with `var(--token)` instead of hard values.
- Each subfolder has its own `README.md` detailing scope and abbreviations.

## Default (md)

- The `md` size is the **default size** for tokens across layers.  
- Comments note `(md = default)` for clarity.
