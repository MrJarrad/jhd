# Fonts

Font utilities define **system-wide font families** and map them to tokens.

## Suisse Intl (Medium only)

Currently, the system includes **Suisse Intl Medium (woff2, weight 500)** loaded via `@font-face`.  
This is the **only weight** included in the system at this time.

## Mapping
Fonts are mapped to CSS variables for consistent usage:
```css
:root {
  --ff-sans: "Suisse Intl", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
```

## Exports
A TS helper is provided for use in React:
```ts
import { fonts } from "@/utils/fonts";

console.log(fonts.sans); // var(--ff-sans)
```

## Principles
- Fonts are defined via `@font-face` inside each font folder.  
- All references go through tokens (`--ff-sans`) or exports (`fonts.sans`).  
- Additional families or weights can be added later under `utils/fonts/` following the same structure.
