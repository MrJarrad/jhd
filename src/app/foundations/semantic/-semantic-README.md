# Semantic

Semantic tokens define the **applied design language** for the system.  
They are built on primitives and base tokens, and are applied directly to components and sections.

## Files

- **semantic-core.css** → grid (contained/flush), spacing (none, sm, md, lg, xl).
- **semantic-typography.css** → roles (title, subtitle, body), size variants (sm, md, lg, xl).
- **semantic-color.css** → backgrounds, borders, content, elevation, across light/dark themes.

## Principles

- Always reference primitives or base tokens (never raw values).
- Includes responsive logic via media queries (mobile → tablet → desktop → wide).
- Includes theme logic via `:root[data-theme="light"]` and `:root[data-theme="dark"]`.
- Consumes:
  - **base-effects.css** → for shadows, blur, and glass (via elevation + effect tokens).
  - **primitive-social.css** → for social/brand colors if required in components or semantic mappings.

## Abbreviations

- **Core**
  - `gr` = grid
  - `co` = contained
  - `fl` = flush
  - `mg` = margin
  - `pd` = padding
  - `in` = indent
  - `off` = offset
  - `sp` = space (vertical spacing)
    - `sp-none` = no spacing (maps to `dimension-dim-0`)
    - `sp-sm` = small spacing
    - `sp-md` = medium spacing (default)
    - `sp-lg` = large spacing
    - `sp-xl` = extra-large spacing

- **Typography**
  - `ty` = typography
  - `fs` = font-size
  - `lh` = line-height
  - `ls` = letter-spacing
  - `fw` = font-weight
  - `ff` = font-family
  - `ps` = paragraph-spacing

- **Color**
  - `color-bg` = background
  - `color-bd` = border
  - `color-ct` = content
  - `color-el` = elevation

- **Effects (consumed from base)**
  - `fx` = effect
  - `ds` = drop-shadow
  - `is` = inner-shadow
  - `bl` = blur
  - `gl` = glass

- **Social (consumed from primitives)**
  - `fb` = Facebook
  - `li` = LinkedIn
  - `ig` = Instagram
  - `x`  = Twitter / X

## Default (md)

- The `md` size is the **default size** for a token.  
- Comments note `(md = default)` for clarity.
