# Base

Base tokens are **reusable building blocks** built on top of primitives.  
They abstract raw values into reusable patterns like status colors, action sizes, icon sizes, or effects.

## Files

- **base-action.css** → action sizes, padding, spacing.
- **base-icon.css** → icon sizes.
- **base-color-status.css** → status colors (negative, positive, warning, disabled, focused).
- **base-effects.css** → reusable visual effects (shadows, blur, glass).

## Principles

- Always reference primitives (never raw values).
- Provide a layer of indirection for semantics to reference consistently.
- Examples:
  - `--status-positive-base` → references a green primitive color.
  - `--action-lg-height` → references a primitive dimension.
  - `--fx-ds-200` → references a stacked multi-layer shadow using semantic elevation colors.

## Abbreviations

- **Effects**
  - `fx` = effect
  - `ds` = drop-shadow
  - `is` = inner-shadow
  - `bl` = blur
  - `gl` = glass
  - `th` = thin
  - `ba` = base
  - `tk` = thick
