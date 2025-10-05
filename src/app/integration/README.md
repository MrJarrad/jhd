# Integration

The integration layer maps **design tokens** into **CMS-ready props** for Builder.io.

## Files
- `tokens-to-props.ts` → central mapping of tokens → props
- `props-schema.ts` → TypeScript types for CMS props
- `builder-mapping.json` → optional Builder.io dropdown mapping

## Principles
- All props reference tokens (`var(--token)`), never raw values.
- Provides a single source of truth between tokens and CMS UI.
- Keeps Builder.io props aligned with the design system.

## Example Usage

```tsx
import { builderProps } from "@/integration/tokens-to-props";

<div style={{ background: builderProps.theme.light }}>
  Content here
</div>
```
