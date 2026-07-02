# @stonly/design-system

Stonly Design System - shared UI components and design tokens.

## AI / LLM Documentation

For detailed component decision guides, usage patterns, and API references, see `docs/`:

- **`docs/ComponentDecisionGuide.mdx`** — Which component to use for each scenario (start here)
- **`docs/Components.mdx`** — Full component API reference
- **`docs/Layout.mdx`** — Flex layout and 8px spacing system
- **`docs/Atoms.mdx`** — Color tokens, typography, shadows
- **`docs/Providers.mdx`** — Theme and context providers
- **`docs/Utils.mdx`** — Utility functions and hooks
- **`docs/AIReference.mdx`** — Compact AI-optimized reference
- **`docs/Introduction.mdx`** — Architecture overview

## Quick Start

### 1. Install

```json
// package.json
{
  "dependencies": {
    "@stonly/design-system": "git+ssh://git@bitbucket.org/stonlybucket/stonly-design-system.git#feat/initial-design-system",
    "styled-components": "^6.1.19"
  }
}
```

```bash
npm install
```

### 2. Wrap App with ThemeProvider and Provider

**Both are required.** `ThemeProvider` provides design tokens to styled-components. `Provider` provides context needed by `InputSelect`, `ModalWindow`, `ActionsDialog`, `Tooltip`, and other interactive components.

```tsx
import { ThemeProvider } from 'styled-components';
import { theme, Provider } from '@stonly/design-system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        {/* Your app */}
      </Provider>
    </ThemeProvider>
  );
}
```

Without `Provider`, components that depend on `LastEventProvider` (Select, InputSelect, Tooltip) or `ImperativeModalWindowProvider` (ModalWindow, dialogs) will throw runtime errors.

### 3. Use Components

```tsx
import {
  color,
  RowFlex,
  ButtonPrimary,
  InputText
} from '@stonly/design-system';

<RowFlex gap={2}>  {/* 16px gap - see Common Mistakes below */}
  <ButtonPrimary onClick={() => {}}>Click me</ButtonPrimary>
  <InputText value={value} onChange={onChange} placeholder="Type..." />
</RowFlex>
```

No bundler configuration required - no aliases, no SVG loaders.

### 4. Using Icons

280+ icons are available as individual modules. Use them with `IconSvg`:

```tsx
import { IconSvg } from '@stonly/design-system';
import HelpIcon from '@stonly/design-system/icons/Help-16';
import SettingsIcon from '@stonly/design-system/icons/Settings-16';
import CopyIcon from '@stonly/design-system/icons/Copy-16';

<IconSvg as={HelpIcon} color={(t) => t.color.iconDefault} />
<IconSvg as={SettingsIcon} color="#ffffff" />
```

Icon naming convention: `Name-Size.svg` (e.g. `Help-16`, `Calendar-24`, `ChevronRight-12`).

### 5. Using Dialogs (not raw ModalWindow)

For dialogs with title, buttons, and close — use `ActionsDialog` inside `ModalWindow`, not manual composition with `DialogHeader`/`DialogContentWrap`/`DialogFooterWrap`:

```tsx
import { ModalWindow, ActionsDialog, ButtonMinimal } from '@stonly/design-system';

<ModalWindow onBackdropClick={onCancel}>
  <ActionsDialog
    size="large"              // 'small' (480px) | 'standard' (640px) | 'large' (800px) | 'extraLarge' (960px)
    title="My Dialog"
    closeAction={onCancel}
    primaryAction={onSubmit}
    primaryLabel="Submit"
    secondaryAction={onBack}
    secondaryLabel="Back"
    tertiaryRender={() => <ButtonMinimal onClick={onCancel}>Cancel</ButtonMinimal>}
  >
    {/* Dialog content */}
  </ActionsDialog>
</ModalWindow>
```

`ActionsDialog` provides built-in width presets, button layout (tertiary on left, secondary + primary on right), loading states, and accessibility attributes.

---

## ⚠️ Common Mistakes

### 1. Layout Spacing - 8px Scale System

**CRITICAL:** All numeric values in `gap`, `margin`, `padding` props are multiplied by 8.

```tsx
// ❌ WRONG
<RowFlex gap={16} margin={24} padding={32}>
  {/* Creates 128px gap, 192px margin, 256px padding! */}
</RowFlex>

// ✓ RIGHT - Use scale values
<RowFlex gap={2} margin={3} padding={4}>
  {/* 16px gap, 24px margin, 32px padding */}
</RowFlex>

// ✓ ALSO RIGHT - For 4px and 12px, use half-steps
<RowFlex gap={0.5} padding={1.5}>
  {/* 4px gap, 12px padding */}
</RowFlex>

// ✓ ALSO RIGHT - Use exact pixel strings
<RowFlex gap="16px" margin="24px">
  {/* Exactly 16px gap and 24px margin */}
</RowFlex>
```

**Quick spacing reference:**
| Value | Result | Usage |
|-------|--------|-------|
| `0.5` | 4px | Tight spacing |
| `1` | 8px | Minimal |
| `1.5` | 12px | Fine-tuning |
| `2` | 16px | **Standard (most common)** |
| `3` | 24px | Medium |
| `4` | 32px | Large |

### 2. Color Token Names

The `color` object uses specific naming conventions:

| ❌ Wrong | ✓ Correct |
|----------|-----------|
| `color.primary` | `color.backgroundPrimary` |
| `color.success` | `color.backgroundSuccess` |
| `color.error` | `color.backgroundDanger` |
| `color.textPrimary` | `color.textDark` |
| `color.textSecondary` | `color.textSubtle` |
| `color.borderLight` | `color.borderSubtle` |

### 3. FieldCheck - Required Type Prop

`FieldCheck` requires a `type` prop:

```tsx
// ❌ WRONG
<FieldCheck label="I agree" checked={value} onChange={handler} />

// ✓ RIGHT
<FieldCheck type="checkbox" label="I agree" checked={value} onChange={handler} />
```

---

## Quick Examples

### Form Layout
```tsx
import { ColumnFlex, FieldText, FieldCheck, ButtonPrimary } from '@stonly/design-system';

<ColumnFlex gap={2}>  {/* 16px gap */}
  <FieldText label="Email" type="email" required />
  <FieldText label="Password" type="password" required />
  <FieldCheck type="checkbox" label="Remember me" />
  <ButtonPrimary>Sign In</ButtonPrimary>
</ColumnFlex>
```

### Button Group
```tsx
import { RowFlex, ButtonOutline, ButtonPrimary } from '@stonly/design-system';

<RowFlex gap={1}>  {/* 8px gap */}
  <ButtonOutline>Cancel</ButtonOutline>
  <ButtonPrimary>Save</ButtonPrimary>
</RowFlex>
```

### Using Color Tokens
```tsx
import styled from 'styled-components';
import { color } from '@stonly/design-system';

const Card = styled.div`
  background: ${color.backgroundDefault};
  border: 1px solid ${color.borderSubtle};
  padding: 24px;

  &:hover {
    background: ${color.backgroundDefaultHover};
  }
`;
```

---

## Available Exports

### Atoms (Design Tokens)

```tsx
import {
  color,          // Semantic color tokens
  shadows,        // shadows.basic, .light, .medium, .strong
  typography,     // Typography styles
  zIndex,         // Z-index scale
  scrollbars,     // Scrollbar styles
} from '@stonly/design-system';
```

### Theme

```tsx
import { theme } from '@stonly/design-system';
```

### Buttons

```tsx
import {
  ButtonPrimary,
  ButtonOutline,
  ButtonMinimal,
  ButtonLink,
  ButtonAdd,
  ButtonSplit,
} from '@stonly/design-system';
```

### Inputs

```tsx
import {
  InputText,
  InputTextarea,
  InputSearch,
  InputPassword,
  InputNumber,
  InputDate,
  InputColor,
  InputDropdown,
  InputSelect,
} from '@stonly/design-system';
```

### Fields (Input + Label + Error)

```tsx
import {
  FieldText,
  FieldTextarea,
  FieldSearch,
  FieldNumber,
  FieldDate,
  FieldToggle,
  FieldCheck,
  FieldRange,
} from '@stonly/design-system';
```

### Layout

```tsx
import { RowFlex, ColumnFlex } from '@stonly/design-system';

<RowFlex gap={2} alignItems="center">
  <div>Item 1</div>
  <div>Item 2</div>
</RowFlex>

<ColumnFlex gap={1}>
  <div>Item 1</div>
  <div>Item 2</div>
</ColumnFlex>
```

### Overlays

```tsx
import {
  Tooltip,
  Popover,
  Dropdown,
  Menu,
} from '@stonly/design-system';
```

### Modals & Dialogs

```tsx
import {
  ModalWindow,
  ModalPanel,
  ModalFullscreen,
  WarningDialog,
  ActionsDialog,
  MiniDialog,
} from '@stonly/design-system';
```

### Lists & Selection

```tsx
import {
  List,
  ListBody,
  ListHeader,
  ListDivider,
  ListBox,
  Select,
  Calendar,
} from '@stonly/design-system';
```

### Utilities

```tsx
import {
  Portal,
  FocusLock,
  IconSvg,
  VisuallyHidden,
} from '@stonly/design-system';
```

---

## Development

### Building the Library

```bash
npm run build        # Build to dist/
npm run dev          # Watch mode
```

### Running Storybook

```bash
npm run storybook    # Start at http://localhost:9009
```

---

## Troubleshooting

### "useGetWasLastEventTypeKeyboard must be used within a LastEventProvider"

**Cause:** Missing `Provider` wrapper. Components like `InputSelect`, `Select`, `Tooltip`, and `ActionsDialog` require `Provider`.

**Fix:** Wrap your app with `Provider`:
```tsx
import { Provider } from '@stonly/design-system';

<Provider>
  <App />
</Provider>
```

### "Cannot read properties of undefined (reading 'borderFocus')"

**Cause:** Missing ThemeProvider

**Fix:** Wrap your app:
```tsx
import { ThemeProvider } from 'styled-components';
import { theme } from '@stonly/design-system';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

### "FieldCheck type is incorrect"

**Cause:** Missing `type` prop on FieldCheck

**Fix:**
```tsx
<FieldCheck type="checkbox" label="Accept terms" />
```

### Styles not applying / Components look broken

**Cause:** `styled-components` not installed or version mismatch

**Fix:**
```bash
npm install styled-components@^6.1.19
```

### Large gaps/spacing

**Cause:** Using pixel values as numbers instead of scale values

**Fix:**
```tsx
// Wrong: gap={16} creates 128px
// Right: gap={2} creates 16px
<RowFlex gap={2}>
```
## Storybook

Browse all available components and their documentation:

**https://test-0.test-stonly.com/storybook**

Note: VPN connection required to access Storybook.
