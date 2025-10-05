# JHD Design System

A token-driven design system powering **Builder.io** components with a clean separation of concerns across **foundations, utils, integration, and components**.

---

## 📂 Repository Structure

```
foundations/       # Core design tokens
  primitive/       # Raw primitives (core, typography, palette, social)
  base/            # Base tokens (action, icon, color-status, effects)
  semantic/        # Semantic tokens (roles, grid, spacing, color, typography)
  -foundations-README.md

utils/             # Utilities
  utils_motion/    # Motion utilities (variants, hooks, parallax, smooth scroll)
  utils_fonts/     # Font setup (Suisse Intl Medium → --ff-sans)
  -utils-README.md

integration/       # Bridge layer → maps tokens into CMS props
  tokens-to-props.ts
  props-schema.ts
  builder-mapping.json
  README.md

components/ 🚧     # CMS-ready React components consuming integration props
  (to be developed)

README.md          # Root-level overview (this file)
package.json       # Project dependencies
tsconfig.json      # TypeScript config
```

---

## 🎨 Design Token Flow

1. **Foundations** → Primitives, Base, Semantic tokens  
2. **Utils** → Motion + Fonts  
3. **Integration** → Tokens mapped into Builder.io props  
4. **Components (🚧 next)** → React + Builder.io CMS-ready UI  

---

## ⚡ Setup

1. Install dependencies:  
   ```sh
   npm install
   ```

2. Import tokens in your styles:  
   ```css
   @import "@/foundations/primitive/primitive-core.css";
   @import "@/foundations/base/base-action.css";
   @import "@/foundations/semantic/semantic-core.css";
   ```

3. Use integration props in components:  
   ```tsx
   import { builderProps } from "@/integration/tokens-to-props";

   export function SectionWrapper({ theme = "light" }) {
     return (
       <section style={{ background: builderProps.theme[theme] }}>
         Content
       </section>
     );
   }
   ```

4. In Builder.io, sync `builder-mapping.json` to create dropdowns for editors.

---

## 🧭 Principles

- **Token-first:** Components consume only `var(--token)` references.  
- **Separation of concerns:**  
  - Foundations = design truth  
  - Utils = behavior helpers  
  - Integration = mapping layer  
  - Components = Builder.io-ready UI  
- **Scalable:** Easy to extend with new tokens, utilities, or components.  
