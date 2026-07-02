# @stonly/design-system — Claude Code Instructions

## Before writing any code

1. **Read the docs first** — Read `AGENT.md`, `README.md`, and `package.json` in this repo before implementing anything. They document all available components, required setup, and constraints.

2. **Match peerDependencies** — Check `peerDependencies` in `package.json` and use matching versions in consumer projects (especially React). Do not assume latest.

3. **Set up providers** — The DS requires `Provider` wrapping. Without it, `InputSelect`, `Select`, `Tooltip`, `ModalWindow`, `ActionsDialog`, and other interactive components will throw runtime errors.

```tsx
import { ThemeProvider } from 'styled-components';
import { theme, Provider } from '@stonly/design-system';

<ThemeProvider theme={theme}>
  <Provider>
    <App />
  </Provider>
</ThemeProvider>
```

## When implementing UI

4. **Use the highest-level DS component available** — Prefer `ActionsDialog` (with `size`, `primaryAction`, `secondaryAction`, `tertiaryRender` props) over manually composing `ModalWindow` + `DialogHeader` + `DialogContentWrap` + `DialogFooterWrap`. Check `docs/ComponentDecisionGuide.mdx` when unsure which component to use.

5. **Use DS icons** — 280+ icons available via `IconSvg`. Never write inline `<svg>` when a DS icon exists. List available icons before implementing.

```tsx
import { IconSvg } from '@stonly/design-system';
import HelpIcon from '@stonly/design-system/icons/Help-16';

<IconSvg as={HelpIcon} color={(t) => t.color.iconDefault} />
```

Icon naming: `Name-Size` (e.g. `Help-16`, `ChevronRight-12`, `Settings-24`).

6. **Check component props before adding custom CSS** — DS components handle sizing, spacing, and layout through props. For example, `ActionsDialog` has `size="small" | "standard" | "large" | "extraLarge"` (480/640/800/960px). Don't add wrapper divs or styled-components for things the DS already handles.

7. **8px spacing multiplier** — All numeric `gap`, `margin`, `padding` values in layout components are multiplied by 8. Use `gap={2}` for 16px, not `gap={16}` (which gives 128px). Use string values like `gap="12px"` to bypass the multiplier.
