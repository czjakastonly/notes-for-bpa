# Stonly Design System

Private React component library built with TypeScript and styled-components.

> **Auto-generated** by `scripts/generate-agent-md.js` from `docs/*.mdx`.
> Do not edit manually — run `npm run generate-agent-md` to regenerate.

## Import

```tsx
import { ButtonPrimary, InputText, color, typography } from '@stonly/design-system';
```

## Requirements

| Package | Version | Type |
|---------|---------|------|
| `react` | `^16.10.2` | peerDependency |
| `react-dom` | `^16.10.2` | peerDependency |
| `styled-components` | `^6.1.19` | peerDependency |
| `framer-motion` | `3.2.1` | dependency (pinned) |

---

# AI Reference - Stonly Design System

This document provides a comprehensive, AI-optimized reference for the Stonly Design System.

---

## QUICK REFERENCE TABLE

| Category | Items | Import Pattern |
|----------|-------|----------------|
| Theme | `theme`, `defaultTheme` | `import { theme } from '@stonly/design-system'` |
| Colors | `color`, `PALETTE` | `import { color } from '@stonly/design-system'` |
| Typography | `typography` | `import { typography } from '@stonly/design-system'` |
| Shadows | `shadows` | `import { shadows } from '@stonly/design-system'` |
| Z-Index | `zIndex` | `import { zIndex } from '@stonly/design-system'` |
| Layout | `Flex`, `RowFlex`, `ColumnFlex` | `import { RowFlex, ColumnFlex } from '@stonly/design-system'` |
| Buttons | `ButtonPrimary`, `ButtonOutline`, `ButtonMinimal`, `ButtonLink`, `ButtonAdd`, `ButtonSplit` | `import { ButtonPrimary } from '@stonly/design-system'` |
| Inputs | `InputText`, `InputNumber`, `InputSelect`, `InputTextarea`, `InputPassword`, `InputDate`, `InputSearch`, `InputColor` | `import { InputText } from '@stonly/design-system'` |
| Fields | `FieldText`, `FieldCheck`, `FieldToggle`, `FieldRange`, etc. | `import { FieldText } from '@stonly/design-system'` |
| Overlays | `Tooltip`, `Popover`, `Dropdown`, `Menu` | `import { Tooltip } from '@stonly/design-system'` |
| Modals | `ModalWindow`, `ModalPanel`, `ModalFullscreen` | `import { ModalWindow } from '@stonly/design-system'` |
| Dialogs | `WarningDialog`, `ActionsDialog`, `MiniDialog` | `import { WarningDialog } from '@stonly/design-system'` |
| Lists | `List`, `ListBox`, `Select` | `import { Select } from '@stonly/design-system'` |
| Utils | `Portal`, `FocusLock`, `IconSvg`, `StackNavigator` | `import { Portal } from '@stonly/design-system'` |
| Providers | `Provider` (default), `LastEventProvider`, `ImperativeModalWindowProvider` | `import Provider from '@stonly/design-system'` |

---

## CRITICAL CONCEPT: 8PX SPACING MULTIPLIER

```
PIXEL_MULTIPLICATOR = 8

Formula: numeric_value * 8 = pixel_value

Examples:
  gap={1}     → 8px
  gap={2}     → 16px
  gap={3}     → 24px
  margin={4}  → 32px
  padding={5} → 40px

String values bypass multiplier:
  gap="12px"  → 12px (unchanged)
```

---

## LAYOUT COMPONENTS

### RowFlex (direction="row")
```tsx
<RowFlex
  gap={2}                    // 16px gap
  alignItems="center"        // 'flex-start' | 'flex-end' | 'center' | 'stretch'
  justifyContent="space-between"  // 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  flexWrap="wrap"           // 'wrap' | 'nowrap' | 'wrap-reverse'
  padding={2}               // 16px all sides
  paddingX={3}              // Override left/right to 24px
>
  {children}
</RowFlex>
```

### ColumnFlex (direction="column")
```tsx
<ColumnFlex
  gap={2}                   // 16px gap
  alignItems="stretch"
  justifyContent="flex-start"
  padding={3}               // 24px all sides
>
  {children}
</ColumnFlex>
```

### Spacing Props (all support 8px multiplier)
- `gap`
- `margin`, `marginX`, `marginY`, `marginTop`, `marginRight`, `marginBottom`, `marginLeft`
- `padding`, `paddingX`, `paddingY`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`

---

## COLOR TOKENS

### Text Colors
```typescript
color.textDark           // #1C1A24 - Headings
color.textDefault        // #474459 - Body text
color.textSubtle         // #706D84 - Secondary text
color.textPlaceholder    // #848296 - Placeholders
color.textInformation    // #3F67DC - Info messages
color.textSuccess        // #217E5A - Success messages
color.textWarning        // #A26000 - Warning messages
color.textDanger         // #D92034 - Error messages
color.textLink           // #3F67DC - Links
```

### Background Colors
```typescript
color.backgroundDefault           // #FFFFFF
color.backgroundDefaultHover      // #F7F7F9
color.backgroundPrimary           // #E61168 - Primary buttons
color.backgroundPrimaryHover      // #A60045
color.backgroundInformation       // #3F67DC
color.backgroundInformationSubtle // #EEF6FE
color.backgroundSuccess           // #217E5A
color.backgroundSuccessSubtle     // #E8F9F0
color.backgroundWarning           // #A26000
color.backgroundWarningSubtle     // #FDF5D7
color.backgroundDanger            // #D92034
color.backgroundDangerSubtle      // #FFF2F2
```

### Border Colors
```typescript
color.borderSubtle      // #E2E2E6 - Subtle dividers
color.borderDefault     // #C1C0CB - Default borders
color.borderDefaultHover // #848296
color.borderPrimary     // #E61168
color.borderFocus       // #5A8BE8 - Focus rings
color.borderDanger      // #D92034 - Error borders
color.borderSuccess     // #2C9F72
color.borderWarning     // #CB7A00
```

### Icon Colors
```typescript
color.iconDefault       // #706D84
color.iconSubtle        // #C1C0CB
color.iconHover         // #1C1A24
color.iconInformation   // #5A8BE8
color.iconSuccess       // #2C9F72
color.iconWarning       // #CB7A00
color.iconDanger        // #D92034
```

---

## TYPOGRAPHY TOKENS

### Headings
```typescript
typography.h0     // 32px / 48px / regular
typography.h1     // 28px / 40px / regular
typography.h2     // 24px / 32px / regular
typography.h3     // 16px / 24px / regular
typography.h3Strong // 16px / 24px / medium
```

### Paragraphs
```typescript
typography.paragraph0       // 16px / 28px / regular
typography.paragraph1       // 14px / 24px / regular
typography.paragraph1Strong // 14px / 24px / medium
typography.paragraph2       // 12px / 20px / regular
typography.paragraphSmall   // 11px / 16px / medium
```

### UI Elements
```typescript
typography.uiElement           // 14px / 20px / regular - Buttons, inputs
typography.uiElementStrong     // 14px / 20px / medium
typography.uiElementSmall      // 12px / 16px / regular
typography.uiElementSmallStrong // 12px / 16px / medium
typography.uiElementLabel      // 12px / 16px / medium / UPPERCASE
typography.uiElementLabelSmall // 10px / 12px / bold / UPPERCASE
```

---

## SHADOWS

```typescript
shadows.basic   // 2px offset, 4px blur   - Cards
shadows.light   // 4px offset, 8px blur   - Dropdowns
shadows.medium  // 8px offset, 16px blur  - Modals
shadows.strong  // 16px offset, 24px blur - Popovers
```

---

## Z-INDEX LAYERS

```typescript
zIndex.modal        // 1000
zIndex.dropdown     // 1050
zIndex.notification // 1100
zIndex.tooltip      // 1150
```

---

## BUTTON PROPS

```typescript
interface ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  iconOnly?: ReactNode;
  isLoading?: boolean;
  isPressed?: boolean;
  onClick?: () => void;
  size?: 'small' | 'standard';
  type?: 'button' | 'submit' | 'reset';
}
```

---

## INPUT PROPS

```typescript
// High-level (InputText, InputNumber, etc.)
interface InputProps {
  label?: string;
  message?: string;
  status?: 'error' | 'warning' | 'success' | 'info' | false;
  required?: boolean;
  tooltip?: ReactNode;
  id?: string;
  // ...plus all FieldProps
}

// Low-level (FieldText, etc.)
interface FieldProps {
  value?: string;
  onChange?: (e: ChangeEvent) => void;
  onChangeValue?: (value: string) => void;
  disabled?: boolean;
  status?: Status;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  placeholder?: string;
}
```

---

## MODAL/DIALOG HOOKS

```typescript
// Warning dialog
const { open, close } = useImperativeModalWarningDialog();
open({
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel?: () => void;
});

// Actions dialog
const { open, close } = useImperativeModalActionsDialog();
open({
  title: string;
  actions: Array<{ label: string; onClick: () => void }>;
});

// Generic modal
const { open, openComponent, close } = useImperativeModalWindow();
open(content: ReactNode, options?: ModalWindowOptions);
```

---

## UTILITY HOOKS

```typescript
// DOM ID management
const id = useDomId(optionalId);
const errorId = generateErrorMessageDomId(baseId, condition);
const labelId = generateLabelDomId(baseId, condition);

// Event handling
useOnKeysDown({ eventKeyList, callback, condition });
useOnClickOutside({ elementRef, exceptionRef, callback, condition });

// Reduced motion
const prefersReducedMotion = useReducedMotion();

// Element size
const width = useDomElementSize(ref);

// Skip mount effect
useEffectSkipMount(effect, deps);
```

---

## PROVIDER SETUP

```tsx
import { ThemeProvider } from 'styled-components';
import Provider, { theme } from '@stonly/design-system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        {/* Application */}
      </Provider>
    </ThemeProvider>
  );
}
```

---

## COMMON PATTERNS

### Form Layout
```tsx
<ColumnFlex gap={2} padding={3}>
  <InputText label="Name" required />
  <InputText label="Email" status="error" message="Invalid email" />
  <RowFlex gap={1} justifyContent="flex-end">
    <ButtonOutline>Cancel</ButtonOutline>
    <ButtonPrimary>Submit</ButtonPrimary>
  </RowFlex>
</ColumnFlex>
```

### Modal Dialog
```tsx
const { open, close } = useImperativeModalWarningDialog();

<ButtonPrimary onClick={() => open({
  title: 'Confirm',
  message: 'Proceed?',
  onConfirm: handleConfirm
})}>
  Open Dialog
</ButtonPrimary>
```

### Dropdown Select
```tsx
<Select
  value={selected}
  onChangeValue={setSelected}
>
  <Option value="1" label="Option 1" />
  <Option value="2" label="Option 2" />
</Select>
```

### Card with Shadow
```tsx
import styled from 'styled-components';
import { color, shadows, ColumnFlex } from '@stonly/design-system';

const Card = styled(ColumnFlex)`
  background: ${color.backgroundDefault};
  border: 1px solid ${color.borderDefault};
  border-radius: 8px;
  box-shadow: ${shadows.basic};
`;

<Card gap={2} padding={3}>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

---

## FILE LOCATIONS

```
src/
├── index.ts                    # Main exports
└── ui/
    ├── atoms/
    │   ├── colors.ts           # Color tokens
    │   ├── typography.ts       # Typography tokens
    │   ├── shadows.ts          # Shadow tokens
    │   ├── zIndex.ts           # Z-index tokens
    │   └── scrollbars.ts       # Scrollbar styles
    ├── components/
    │   ├── Flex/               # Layout components
    │   ├── buttons/            # Button components
    │   ├── inputs/             # Input components
    │   ├── Tooltip/            # Tooltip
    │   ├── Popover/            # Popover
    │   ├── Dropdown/           # Dropdown
    │   ├── ModalWindow/        # Modal
    │   ├── dialogs/            # Dialog components
    │   ├── List/               # List components
    │   ├── ListBox/            # ListBox
    │   └── Select/             # Select
    ├── providers/
    │   ├── index.tsx           # Main provider
    │   ├── LastEventProvider/  # Keyboard/mouse tracking
    │   └── ImperativeModalWindowProvider/
    ├── utils/
    │   ├── Portal/             # Portal utility
    │   ├── FocusLock/          # Focus trap
    │   ├── IconSvg/            # SVG icons
    │   ├── StackNavigator/     # Navigation state
    │   ├── interactions/       # Interaction utilities
    │   ├── domId.ts            # ID generation
    │   ├── onKeysDown.ts       # Keyboard handler
    │   ├── onClickOutside.ts   # Click outside handler
    │   └── mergeClassNames.ts  # Class name helper
    └── constants.ts            # Static class names
```

---

{/* This guide helps AI and developers choose the right component for each scenario. */}
{/* Focus: WHEN to use, not HOW to use (see Components.mdx for API details). */}

# Component Decision Guide

Use this guide to pick the right component. If you know the scenario, jump to the matching section.

---

## Quick Scenario Lookup

| I need to... | Use |
|---|---|
| Let user type text | `InputText` (with label) or `FieldText` (bare) |
| Let user pick one option from a list | `InputSelect` with `<Option>` children |
| Show action menu (Edit, Delete, etc.) | `Menu` with `<Action>` children |
| Show custom floating content | `Dropdown` |
| Show help text on hover | `Tooltip` |
| Show a floating interactive panel | `Popover` (rare — usually use `Dropdown`) |
| Confirm a destructive action | `WarningDialog` |
| Offer multiple actions to choose from | `ActionsDialog` |
| Show quick settings/options | `MiniDialog` |
| Show a standard modal | `ModalWindow` |
| Show a side panel | `ModalPanel` |
| Display a status label | `BadgeLabel` |
| Display a count/number badge | `BadgeCounter` |
| Display a user avatar circle | `BadgeAvatar` |
| Display a custom-colored tag | `Chip` |
| Show truncating tag with tooltip | `ChipTruncatable` |
| Show a persistent message in content | `Notification` |
| Show a temporary popup message | `Toast` (WIP — not yet publicly exported) |
| Build a standard form | `Input*` components (`InputText`, `InputSelect`, etc.) |
| Build a custom component with selection behavior | `ListBox` + `List` |

---

## Buttons

All buttons share the same prop pattern: `children`, `iconLeft`, `iconRight`, `iconOnly`, `isLoading`, `isPressed`, `disabled`, `size`.

### Decision Tree

```
What is the button's role?
│
├─ Primary action (Save, Submit, Confirm)
│  → ButtonPrimary
│
├─ Secondary action (Cancel, Back, Edit)
│  → ButtonOutline
│
├─ Tertiary/low-emphasis action (Filter, Sort, Settings)
│  → ButtonMinimal
│
├─ Navigation or inline text action ("Learn more", "View details")
│  → ButtonLink
│
├─ Create/add something ("Add item", "+ New")
│  → ButtonAdd
│
├─ Drop zone / dashed add area ("Add list item", drag target)
│  → ButtonDropzone
│
├─ Primary action + extra options (Save ▾)
│  → ButtonSplit
│
└─ Two buttons joined in a rectangle (filter + menu)
   → ButtonSplitRectangle wrapping ButtonOutline children
```

### Common naming confusion

| You might call it | Actual component |
|---|---|
| "ghost button" | `ButtonMinimal` |
| "text button" | `ButtonLink` |
| "secondary button" | `ButtonOutline` |
| "CTA" / "main button" | `ButtonPrimary` |
| "icon button" | Any button with `iconOnly` prop |
| "add button" / "plus button" | `ButtonAdd` |
| "split button" / "button with dropdown" | `ButtonSplit` |
| "dropzone" / "dashed button" | `ButtonDropzone` |

### Size

All buttons support `size="standard"` (default, 36px) and `size="small"` (28px). Exception: `ButtonDropzone` is always 40px height.

---

## Input vs Field — The Wrapper Pattern

This is the most important pattern to understand. The library has **two layers** for every input type:

```
InputText (complete form field)          ← USE THIS in forms
  └─ InputWrap (adds label, message, tooltip, required)
    └─ FieldText (bare input element)   ← USE THIS only for custom wrappers
```

### Rule

- **Building a form?** → Use `Input*` (InputText, InputSelect, InputNumber, etc.)
- **Building a custom wrapper component?** → Use `Field*` (FieldText, FieldNumber, etc.)
- **99% of the time** → Use `Input*`

### Full mapping

| Input (with label) | Field (bare) | Purpose |
|---|---|---|
| `InputText` | `FieldText` | Single-line text |
| `InputTextarea` | `FieldTextarea` | Multi-line text |
| `InputTextareaAi` | `FieldTextareaAi` | Multi-line text with AI features |
| `InputSearch` | `FieldSearch` | Search with icon |
| `InputPassword` | — | Password with toggle |
| `InputNumber` | `FieldNumber` | Numeric input |
| `InputDate` | `FieldDate` | Date picker |
| `InputColor` | — | Color picker |
| `InputSelect` | — | Select from options |
| `InputDropdown` | — | Custom dropdown content (WIP) |
| — | `FieldCheck` | Checkbox or radio (`type` prop required!) |
| — | `FieldToggle` | Toggle switch |
| — | `FieldRange` | Range slider |

### FieldCheck gotcha

`FieldCheck` requires a `type` prop — it renders both checkboxes and radios:

```tsx
<FieldCheck type="checkbox" label="Accept terms" />
<FieldCheck type="radio" label="Option A" name="group" />
```

---

## Select vs Dropdown vs Menu vs Popover

These four components look similar but serve very different purposes:

### Decision Tree

```
What will the floating content contain?
│
├─ A list of options where user picks one (or more)
│  → Select (or SelectMultiple)
│  → Wrapped as InputSelect for forms
│
├─ A list of actions (Edit, Delete, Share, Copy)
│  → Menu with <Action> children
│
├─ Custom/arbitrary content (form, preview, settings panel)
│  → Dropdown
│
└─ Nothing — I'm building a component library primitive
   → Popover (almost never used directly)
```

### Comparison

| Component | Contains | Keyboard | Closes on | ARIA role | Use in forms? |
|---|---|---|---|---|---|
| **Select** | `<Option>` list | Arrow keys + search | Selection | combobox + listbox | Yes (via InputSelect) |
| **SelectMultiple** | `<Option>` list | Arrow keys + search | Manual close | combobox + listbox | Yes |
| **Menu** | `<Action>` items | Arrow keys | Action click | menu | No |
| **Dropdown** | Anything | Configurable | ESC / click outside | — | Via InputDropdown (WIP) |
| **Popover** | Anything | None | Manual | — | No |

### Key distinctions

- **Select** = "pick a value" → changes form state
- **Menu** = "do an action" → triggers side effects
- **Dropdown** = "show content" → generic container
- **Popover** = low-level primitive → rarely use directly

### Fragment gotcha

`Select` and `SelectMultiple` do **not** allow React Fragments as direct children — pass `<Option>` elements directly. `Menu` **does** allow Fragments around `<Action>` children.

### Select auto-search

`Select` automatically shows a search input when there are **10 or more options**. No configuration needed.

---

## Tooltip vs Popover

```
Is the content interactive (buttons, links, inputs)?
│
├─ No, just informational text → Tooltip
│
└─ Yes, user needs to interact → Dropdown (not Popover directly)
```

| | Tooltip | Dropdown/Popover |
|---|---|---|
| Trigger | Hover / focus | Click |
| Content | Text only | Any content |
| Interactive | No | Yes |
| Has arrow | Yes | No |
| Auto-dismiss | On mouse leave | On ESC / click outside |

---

## Badge vs Chip

```
What are you displaying?
│
├─ A status label (Active, Pending, Failed)
│  → BadgeLabel with variant
│
├─ A numeric indicator (unread count, notifications)
│  → BadgeCounter
│
├─ User initials in a circle
│  → BadgeAvatar
│
├─ A tag/filter with custom colors
│  → Chip
│
└─ A tag that may truncate with tooltip
   → ChipTruncatable
```

### Key difference

- **Badge** = predefined semantic variants, non-interactive, status display
- **Chip** = custom colors via props, can be interactive (onClick), flexible styling

| | Badge | Chip |
|---|---|---|
| Colors | Predefined variants | Custom via `borderColor`/`background` props |
| Interactive | Never | Can be (add onClick) |
| Truncation | No | `ChipTruncatable` with auto-tooltip |
| Use case | Status, counts, avatars | Tags, filters, selections |

---

## Notification vs Toast

```
Where should the message appear?
│
├─ Inline with page content (banner, form error)
│  → Notification (or NotificationSmall for compact)
│
└─ Floating overlay, temporary
   → Toast
```

| | Notification | NotificationSmall | Toast (WIP) |
|---|---|---|---|
| Position | In content flow | In content flow | Floating overlay |
| Duration | Persistent | Persistent | Auto-dismiss |
| Size | Standard | Compact | Standard |
| Icon | Yes | No | Yes |
| Action button | No | No | Yes |
| Use case | Form errors, warnings | Secondary info | Success/failure feedback |

> **Note:** `Toast` exists in the source but is **not yet publicly exported**. Until it is, use `Notification` for all messaging needs.

---

## Modals vs Dialogs

```
What is the overlay for?
│
├─ Generic content (form, wizard, detail view)
│  │
│  ├─ Standard centered window → ModalWindow
│  ├─ Side panel sliding in → ModalPanel
│  └─ Full screen takeover → ModalFullscreen
│
└─ Specific interaction pattern
   │
   ├─ Confirm destructive action ("Delete this?") → WarningDialog
   ├─ Choose between actions → ActionsDialog
   └─ Quick lightweight popup → MiniDialog
```

### Imperative hooks

`WarningDialog` and `ActionsDialog` can be opened imperatively (no state management needed):

```tsx
const { open: openWarning } = useImperativeModalWarningDialog();
const { open: openActions } = useImperativeModalActionsDialog();

// Later:
openWarning({ title: 'Delete?', onConfirm: handleDelete });
```

Requires `ImperativeModalWindowProvider` in the tree.

---

## ListBox vs List vs Select

These are **layers**, not alternatives:

```
Select (complete, use this)
  ├─ ListBox (adds keyboard nav + selection behavior)
  │  └─ List (structural container)
  └─ Dropdown (floating positioning)
```

| Component | Level | What it provides | Use when |
|---|---|---|---|
| **Select** | High | Complete dropdown select | Standard form field |
| **ListBox** | Mid | Keyboard + selection behavior | Building custom select-like components |
| **List** | Low | Structural layout only | Building custom list UIs |

**Rule:** Use `Select` (or `InputSelect` for forms). Only reach for `ListBox` or `List` if you're building a new component.

---

## Layout: Flex Components

```
Need horizontal layout?  → RowFlex
Need vertical layout?    → ColumnFlex
Need generic flex?       → Flex with direction prop
Need accessible hiding?  → VisuallyHidden
```

### Spacing reminder (8px scale)

All numeric `gap`, `margin`, `padding` values are **multiplied by 8**:

| Value | Result |
|---|---|
| `0.5` | 4px |
| `1` | 8px |
| `2` | 16px (most common) |
| `3` | 24px |
| `4` | 32px |

Use string values for exact pixels: `gap="12px"`.

---

## Architecture Layers

The library follows a layered pattern. Higher layers compose lower ones:

```
Layer 4: Form Wrappers    InputText, InputSelect, InputNumber...
Layer 3: Components        Select, Menu, WarningDialog, Notification...
Layer 2: Behaviors         ListBox, FocusLock, withTooltip...
Layer 1: Primitives        Popover, Portal, List, Flex...
Layer 0: Atoms             color, typography, shadows, zIndex...
```

**Always pick the highest layer that fits your need.** Only go lower when building custom components.

---

# Stonly Design System

## Overview

The Stonly Design System is a comprehensive React component library built with TypeScript and styled-components. It provides a consistent set of UI components, design tokens, utilities, and providers for building accessible, themeable user interfaces.

**Figma Design References:**
- Components: https://www.figma.com/design/X9o3ueR8dt2fsp96eUSn4R/Components?node-id=4121-13041&m=dev
- Atoms: https://www.figma.com/design/SvImSJtWiaK0m6BSC4WEBn/Atoms?node-id=0-1&p=f&m=dev

---

## Core Concepts

### 8px Spacing System

The design system uses an **8px multiplier** for all spacing values. When you pass a numeric value to spacing props (`gap`, `margin`, `padding`), it gets multiplied by 8.

```typescript
// PIXEL_MULTIPLICATOR = 8

<Flex gap={1} />      // gap: 8px
<Flex gap={2} />      // gap: 16px
<Flex gap={3} />      // gap: 24px
<Flex margin={2} />   // margin: 16px
<Flex padding={4} />  // padding: 32px
```

You can also pass string values for custom spacing:
```typescript
<Flex gap="12px" />   // gap: 12px (bypasses multiplier)
```

### Theme Integration

All components use styled-components with theme integration. Wrap your app with the theme provider:

```typescript
import { ThemeProvider } from 'styled-components';
import { theme } from '@stonly/design-system';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

---

## Installation & Setup

### Basic Setup

```typescript
import {
  // Theme
  theme,

  // Providers
  Provider,

  // Components
  ButtonPrimary,
  InputText,
  RowFlex,
  ColumnFlex,

  // Atoms
  color,
  typography,
  shadows,
  zIndex
} from '@stonly/design-system';
```

### Provider Setup

Wrap your application with the design system providers:

```typescript
import { ThemeProvider } from 'styled-components';
import Provider, { theme } from '@stonly/design-system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        {/* Your app content */}
      </Provider>
    </ThemeProvider>
  );
}
```

---

## Architecture

### Directory Structure

```
src/ui/
├── atoms/           # Design tokens (colors, typography, shadows, zIndex)
├── components/      # UI components (buttons, inputs, modals, etc.)
├── providers/       # Context providers (LastEvent, ImperativeModal)
├── utils/           # Utility functions and hooks
└── constants.ts     # Static class names for testing
```

### Export Categories

| Category | Description |
|----------|-------------|
| **Atoms** | Design tokens: `color`, `typography`, `shadows`, `zIndex`, `scrollbars` |
| **Layout** | `Flex`, `RowFlex`, `ColumnFlex`, `VisuallyHidden` |
| **Buttons** | `ButtonPrimary`, `ButtonOutline`, `ButtonMinimal`, `ButtonLink`, `ButtonAdd`, `ButtonSplit` |
| **Inputs** | High-level: `InputText`, `InputNumber`, `InputSelect`, etc. |
| **Fields** | Low-level: `FieldText`, `FieldCheck`, `FieldToggle`, etc. |
| **Overlays** | `Tooltip`, `Popover`, `Dropdown`, `Menu` |
| **Modals** | `ModalWindow`, `ModalPanel`, `ModalFullscreen` |
| **Dialogs** | `WarningDialog`, `ActionsDialog`, `MiniDialog` |
| **Lists** | `List`, `ListBox`, `Select` |
| **Utils** | `Portal`, `FocusLock`, `IconSvg`, `StackNavigator`, Interactions |
| **Providers** | `LastEventProvider`, `ImperativeModalWindowProvider` |

---

## Quick Start Examples

### Layout with RowFlex and ColumnFlex

```tsx
import { RowFlex, ColumnFlex, ButtonPrimary } from '@stonly/design-system';

// Horizontal layout
<RowFlex gap={2} alignItems="center">
  <ButtonPrimary>Action 1</ButtonPrimary>
  <ButtonPrimary>Action 2</ButtonPrimary>
</RowFlex>

// Vertical layout
<ColumnFlex gap={3} padding={2}>
  <InputText label="Name" />
  <InputText label="Email" />
  <ButtonPrimary>Submit</ButtonPrimary>
</ColumnFlex>
```

### Form with Inputs

```tsx
import { ColumnFlex, InputText, InputSelect, ButtonPrimary } from '@stonly/design-system';

<ColumnFlex gap={2}>
  <InputText
    label="Username"
    required
    status="error"
    message="Username is required"
  />
  <InputSelect
    label="Country"
    value={country}
    onChangeValue={setCountry}
  >
    <Option value="us" label="United States" />
    <Option value="uk" label="United Kingdom" />
  </InputSelect>
  <ButtonPrimary>Submit</ButtonPrimary>
</ColumnFlex>
```

### Modal Dialog

```tsx
import { useImperativeModalWarningDialog } from '@stonly/design-system';

function MyComponent() {
  const { open } = useImperativeModalWarningDialog();

  const handleDelete = () => {
    open({
      title: 'Delete Item',
      message: 'Are you sure you want to delete this item?',
      confirmLabel: 'Delete',
      onConfirm: () => { /* delete logic */ }
    });
  };

  return <ButtonPrimary onClick={handleDelete}>Delete</ButtonPrimary>;
}
```

---

## Accessibility

The design system is built with accessibility in mind:

- All interactive components support keyboard navigation
- ARIA attributes are properly set (labels, roles, states)
- Focus management is handled by `FocusLock` component
- The `LastEventProvider` tracks keyboard vs mouse focus for appropriate visual indicators
- Color contrast ratios meet WCAG guidelines

---

## Testing

Static class names are provided for testing queries:

```typescript
import { STATIC_CLASS_NAME } from '@stonly/design-system';

// Available class names:
STATIC_CLASS_NAME.buttonMinimal
STATIC_CLASS_NAME.dialog
STATIC_CLASS_NAME.dropdownTrigger
STATIC_CLASS_NAME.field
STATIC_CLASS_NAME.inputLabel
STATIC_CLASS_NAME.modal
STATIC_CLASS_NAME.tooltip
// ... and more
```

---

# Atoms - Design Tokens

Atoms are the foundational design tokens that define the visual language of the design system. They include colors, typography, shadows, and z-index values.

**Figma Reference:** https://www.figma.com/design/SvImSJtWiaK0m6BSC4WEBn/Atoms?node-id=0-1&p=f&m=dev

---

## Colors

### Import

```typescript
import { color } from '@stonly/design-system';
// or
import { PALETTE, color } from './ui/atoms/colors';
```

### Color Palette

The palette contains 9 color families plus neutrals, each with numbered variants (100-750):

| Family | Variants | Description |
|--------|----------|-------------|
| **Green** | 100-750 | Success states, active indicators |
| **Teal** | 100-750 | Alternative accent color |
| **Blue** | 100-750 | Information, links, focus states |
| **Purple** | 100-750 | Brand accent, guided tours |
| **Magenta** | 100-750 | Decorative accent |
| **Pink** | 100-750 | Primary brand color |
| **Red** | 100-750 | Error, danger states |
| **Orange** | 100-750 | Warning states |
| **Yellow** | 100-750 | Warning states, highlights |
| **Neutral** | 100-750 | Text, backgrounds, borders |

### Palette Values

```typescript
const PALETTE = {
  // Green family
  green100: '#E8F9F0',
  green200: '#CFF0DE',
  green300: '#75D3A8',
  green400: '#2C9F72',
  green500: '#217E5A',
  green600: '#165E42',
  green750: '#002D19',

  // Blue family
  blue100: '#EEF6FE',
  blue200: '#D2E4FE',
  blue300: '#A2C8F7',
  blue400: '#5A8BE8',
  blue500: '#3F67DC',
  blue600: '#3449AC',
  blue750: '#142350',

  // Pink family (Primary brand)
  pink100: '#FFF1F9',
  pink200: '#FFE0ED',
  pink300: '#FCAAC5',
  pink400: '#F74D7E',
  pink475: '#E61168',  // Primary brand color
  pink600: '#A60045',
  pink750: '#52001F',

  // Red family
  red100: '#FFF2F2',
  red200: '#FFE1E1',
  red300: '#FFABA7',
  red400: '#F8505B',
  red500: '#D92034',
  red600: '#A9001C',
  red750: '#540001',

  // Neutral family
  neutral100: '#F7F7F9',
  neutral200: '#E2E2E6',
  neutral300: '#C1C0CB',
  neutral400: '#848296',
  neutral500: '#706D84',
  neutral600: '#474459',
  neutral750: '#1C1A24',
  neutral100A: '#2621440A',  // With alpha
  neutral200A: '#2621441A',  // With alpha
  white: '#FFFFFF',
};
```

### Semantic Colors

The `color` object provides semantic tokens mapped to palette values:

#### Text Colors

| Token | Value | Usage |
|-------|-------|-------|
| `color.textDark` | neutral750 | Headings, emphasized text |
| `color.textDefault` | neutral600 | Body text |
| `color.textSubtle` | neutral500 | Secondary text |
| `color.textPlaceholder` | neutral400 | Input placeholders |
| `color.textHover` | neutral750 | Text on hover |
| `color.textActive` | neutral750 | Active text |
| `color.textDefaultInverse` | white | Text on dark backgrounds |
| `color.textInformation` | blue500 | Informational messages |
| `color.textSuccess` | green500 | Success messages |
| `color.textWarning` | yellow500 | Warning messages |
| `color.textDanger` | red500 | Error messages |
| `color.textLink` | blue500 | Link text |
| `color.textLinkHover` | blue600 | Link text on hover |
| `color.textLinkPressed` | blue750 | Link text when pressed |

#### Background Colors

| Token | Usage |
|-------|-------|
| `color.backgroundDefault` | Default surface |
| `color.backgroundDefaultHover` | Surface on hover |
| `color.backgroundDefaultPressed` | Surface when pressed |
| `color.backgroundDefaultActive` | Active surface |
| `color.backgroundPrimary` | Primary buttons (pink475) |
| `color.backgroundPrimaryHover` | Primary buttons on hover |
| `color.backgroundPrimaryPressed` | Primary buttons when pressed |
| `color.backgroundBrand` | Brand elements |
| `color.backgroundInformation` | Info banners |
| `color.backgroundInformationSubtle` | Subtle info backgrounds |
| `color.backgroundSuccess` | Success banners |
| `color.backgroundSuccessSubtle` | Subtle success backgrounds |
| `color.backgroundWarning` | Warning banners |
| `color.backgroundWarningSubtle` | Subtle warning backgrounds |
| `color.backgroundDanger` | Error banners |
| `color.backgroundDangerSubtle` | Subtle error backgrounds |

#### Icon Colors

| Token | Usage |
|-------|-------|
| `color.iconDefault` | Default icon color |
| `color.iconDefaultWithText` | Icons paired with text |
| `color.iconSubtle` | De-emphasized icons |
| `color.iconHover` | Icons on hover |
| `color.iconDefaultInverse` | Icons on dark backgrounds |
| `color.iconInformation` | Info icons |
| `color.iconSuccess` | Success icons |
| `color.iconWarning` | Warning icons |
| `color.iconDanger` | Error icons |

#### Border Colors

| Token | Usage |
|-------|-------|
| `color.borderSubtle` | Subtle dividers |
| `color.borderDefault` | Default borders |
| `color.borderDefaultHover` | Borders on hover |
| `color.borderPrimary` | Primary accent borders |
| `color.borderInformation` | Info state borders |
| `color.borderSuccess` | Success state borders |
| `color.borderWarning` | Warning state borders |
| `color.borderDanger` | Error state borders |
| `color.borderFocus` | Focus ring color |

### Usage Example

```tsx
import { color } from '@stonly/design-system';
import styled from 'styled-components';

const Card = styled.div`
  background: ${color.backgroundDefault};
  border: 1px solid ${color.borderDefault};
  color: ${color.textDefault};

  &:hover {
    border-color: ${color.borderDefaultHover};
  }
`;

const ErrorMessage = styled.span`
  color: ${color.textDanger};
`;
```

---

## Typography

### Import

```typescript
import { typography } from '@stonly/design-system';
```

### Font Weights

```typescript
const fontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
};
```

### Typography Styles

#### Headings

| Token | Font Size | Line Height | Weight | Usage |
|-------|-----------|-------------|--------|-------|
| `typography.h0` | 32px | 48px | regular | Page titles |
| `typography.h1` | 28px | 40px | regular | Section titles |
| `typography.h2` | 24px | 32px | regular | Subsection titles |
| `typography.h3` | 16px | 24px | regular | Card titles |
| `typography.h3Strong` | 16px | 24px | medium | Emphasized card titles |

#### Paragraphs

| Token | Font Size | Line Height | Weight | Usage |
|-------|-----------|-------------|--------|-------|
| `typography.paragraph0` | 16px | 28px | regular | Large body text |
| `typography.paragraph1` | 14px | 24px | regular | Standard body text |
| `typography.paragraph1Strong` | 14px | 24px | medium | Emphasized body text |
| `typography.paragraph2` | 12px | 20px | regular | Small body text |
| `typography.paragraphSmall` | 11px | 16px | medium | Captions, footnotes |

#### UI Elements

| Token | Font Size | Line Height | Weight | Usage |
|-------|-----------|-------------|--------|-------|
| `typography.uiElement` | 14px | 20px | regular | Buttons, inputs |
| `typography.uiElementStrong` | 14px | 20px | medium | Emphasized UI text |
| `typography.uiElementSmall` | 12px | 16px | regular | Small buttons, tags |
| `typography.uiElementSmallStrong` | 12px | 16px | medium | Emphasized small UI |
| `typography.uiElementLabel` | 12px | 16px | medium | Labels (uppercase) |
| `typography.uiElementLabelSmall` | 10px | 12px | bold | Small labels (uppercase) |

### Usage Example

```tsx
import { typography, color } from '@stonly/design-system';
import styled from 'styled-components';

const Title = styled.h1`
  ${typography.h1};
  color: ${color.textDark};
`;

const BodyText = styled.p`
  ${typography.paragraph1};
  color: ${color.textDefault};
`;

const Label = styled.span`
  ${typography.uiElementLabel};
  color: ${color.textSubtle};
`;
```

### Deprecated Styles

The following styles are deprecated and should not be used in new code:

- `text0` → use `paragraph0`
- `text1` → use `paragraph1` or `uiElement`
- `text1Strong` → use `paragraph1Strong`
- `text2` → use `paragraph2`
- `label` → use `uiElementLabel`
- `textSmall` → use `paragraphSmall`
- `labelSmall` → use `uiElementLabelSmall`

---

## Shadows

### Import

```typescript
import { shadows } from '@stonly/design-system';
```

### Shadow Levels

| Token | Offset | Blur | Usage |
|-------|--------|------|-------|
| `shadows.basic` | 2px | 4px | Cards, subtle elevation |
| `shadows.light` | 4px | 8px | Dropdowns, tooltips |
| `shadows.medium` | 8px | 16px | Modals, dialogs |
| `shadows.strong` | 16px | 24px | Popovers, high elevation |

### Shadow Values

```typescript
const shadows = {
  basic:  '0px 2px 4px 0px rgba(0,0,0,0.08), 0px 0px 4px 0px rgba(0,0,0,0.08)',
  light:  '0px 4px 8px 0px rgba(0,0,0,0.08), 0px 0px 8px 0px rgba(0,0,0,0.08)',
  medium: '0px 8px 16px 0px rgba(0,0,0,0.08), 0px 0px 16px 0px rgba(0,0,0,0.08)',
  strong: '0px 16px 24px 0px rgba(0,0,0,0.08), 0px 0px 24px 0px rgba(0,0,0,0.08)',
};
```

### Usage Example

```tsx
import { shadows } from '@stonly/design-system';
import styled from 'styled-components';

const Card = styled.div`
  box-shadow: ${shadows.basic};

  &:hover {
    box-shadow: ${shadows.light};
  }
`;

const Modal = styled.div`
  box-shadow: ${shadows.medium};
`;
```

---

## Z-Index

### Import

```typescript
import { zIndex } from '@stonly/design-system';
import type { ZIndexType } from '@stonly/design-system';
```

### Z-Index Layers

| Token | Value | Usage |
|-------|-------|-------|
| `zIndex.modal` | 1000 | Modal windows, fullscreen panels |
| `zIndex.dropdown` | 1050 | Dropdown menus, popovers |
| `zIndex.notification` | 1100 | Toast notifications |
| `zIndex.tooltip` | 1150 | Tooltips (highest priority) |

### Usage Example

```tsx
import { zIndex } from '@stonly/design-system';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  z-index: ${zIndex.modal};
`;

const Dropdown = styled.div`
  position: absolute;
  z-index: ${zIndex.dropdown};
`;
```

---

## Scrollbars

### Import

```typescript
import { scrollbars } from '@stonly/design-system';
```

### Description

The `scrollbars` export is a styled-components CSS snippet that provides consistent scrollbar styling across the design system. It uses theme colors for dynamic theming.

```typescript
// Scrollbar specifications:
// - Width: 12px
// - Border radius: 6px
// - Thumb color: theme-based (changes with theme)
// - Track: transparent
```

### Usage Example

```tsx
import { scrollbars } from '@stonly/design-system';
import styled from 'styled-components';

const ScrollContainer = styled.div`
  overflow-y: auto;
  max-height: 300px;
  ${scrollbars};
`;
```

---

# Components

The design system provides a comprehensive set of UI components organized by category.

**Figma Reference:** https://www.figma.com/design/X9o3ueR8dt2fsp96eUSn4R/Components?node-id=4121-13041&m=dev

---

## Button Components

All button components support ref forwarding and standard HTML button attributes.

### ButtonPrimary

Primary action button with filled background.

```typescript
interface ButtonPrimaryProps {
  children?: ReactNode;
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  iconOnly?: ReactNode;
  isLoading?: boolean;
  isPressed?: boolean;
  label?: string;
  onClick?: () => void;
  size?: 'small' | 'standard';  // default: 'standard'
  type?: 'button' | 'submit' | 'reset';
}
```

```tsx
import { ButtonPrimary } from '@stonly/design-system';

// Basic
<ButtonPrimary>Save Changes</ButtonPrimary>

// With icon
<ButtonPrimary iconLeft={<PlusIcon />}>Add Item</ButtonPrimary>

// Loading state
<ButtonPrimary isLoading>Saving...</ButtonPrimary>

// Small size
<ButtonPrimary size="small">Small Button</ButtonPrimary>

// Icon only
<ButtonPrimary iconOnly={<SettingsIcon />} />
```

### ButtonOutline

Secondary action button with outlined style.

```tsx
import { ButtonOutline } from '@stonly/design-system';

<ButtonOutline>Cancel</ButtonOutline>
<ButtonOutline iconLeft={<EditIcon />}>Edit</ButtonOutline>
```

### ButtonMinimal

Low-emphasis button with minimal styling.

```tsx
import { ButtonMinimal } from '@stonly/design-system';

<ButtonMinimal>Learn More</ButtonMinimal>
<ButtonMinimal iconOnly={<CloseIcon />} />
```

### ButtonLink

Text-style button that looks like a link.

```tsx
import { ButtonLink } from '@stonly/design-system';

<ButtonLink>View Details</ButtonLink>
<ButtonLink iconRight={<ArrowIcon />}>Next</ButtonLink>
```

### ButtonAdd

Specialized button for adding items.

```tsx
import { ButtonAdd } from '@stonly/design-system';

<ButtonAdd>Add New Item</ButtonAdd>
```

### ButtonSplit

Container for combining related buttons.

```tsx
import { ButtonSplit, ButtonPrimary } from '@stonly/design-system';

<ButtonSplit>
  <ButtonPrimary>Save</ButtonPrimary>
  <ButtonPrimary iconOnly={<ChevronDownIcon />} />
</ButtonSplit>
```

### Loader

Loading indicator component used internally by buttons.

```tsx
import { Loader } from '@stonly/design-system';

<Loader />
<Loader isDark />  // For light backgrounds
```

---

## Input Components

The design system has two levels of input components:
- **Input*** - High-level components with label, message, and validation UI
- **Field*** - Low-level form controls without wrapper UI

### Input Component Architecture

```tsx
// InputText = FieldText wrapped with InputWrap
<InputWrap label="Email" message="Enter valid email" status="error">
  <FieldText />
</InputWrap>
```

### Common Input Props

```typescript
// High-level Input* props
interface InputProps {
  label?: string;
  message?: string;
  status?: 'error' | 'warning' | 'success' | 'info' | false;
  required?: boolean;
  tooltip?: ReactNode;
  id?: string;
  className?: string;
}

// Low-level Field* props
interface FieldProps {
  value?: string | number;
  onChange?: (e: ChangeEvent) => void;
  onChangeValue?: (value: string) => void;
  disabled?: boolean;
  status?: Status;
  tabIndex?: number;
  name?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  additionalActionNode?: ReactNode;
}
```

### InputText / FieldText

Single-line text input.

```tsx
import { InputText, FieldText } from '@stonly/design-system';

// High-level with label
<InputText
  label="Username"
  placeholder="Enter username"
  required
  message="Username is required"
  status="error"
/>

// Low-level
<FieldText
  value={value}
  onChangeValue={setValue}
  placeholder="Enter text"
/>
```

### InputNumber / FieldNumber

Numeric input with increment/decrement controls.

```tsx
import { InputNumber } from '@stonly/design-system';

<InputNumber
  label="Quantity"
  min={0}
  max={100}
  step={1}
/>
```

### InputTextarea / FieldTextarea

Multi-line text input.

```tsx
import { InputTextarea } from '@stonly/design-system';

<InputTextarea
  label="Description"
  rows={4}
  maxLength={500}
/>
```

### InputTextareaAi

Textarea with AI-related styling/features.

```tsx
import { InputTextareaAi } from '@stonly/design-system';

<InputTextareaAi
  label="AI Prompt"
  placeholder="Enter your prompt..."
/>
```

### InputSearch / FieldSearch

Search input with search icon.

```tsx
import { InputSearch } from '@stonly/design-system';

<InputSearch
  placeholder="Search..."
  onChangeValue={setSearchQuery}
/>
```

### InputPassword

Password input with show/hide toggle.

```tsx
import { InputPassword } from '@stonly/design-system';

<InputPassword
  label="Password"
  required
/>
```

### InputDate / FieldDate

Date picker input.

```tsx
import { InputDate } from '@stonly/design-system';

<InputDate
  label="Start Date"
  value={date}
  onChange={setDate}
/>
```

### InputSelect / InputDropdown

Dropdown select input. Uses `<Option>` children (not an `items` prop).

```tsx
import { InputSelect, Option } from '@stonly/design-system';

<InputSelect
  label="Country"
  value={country}
  onChangeValue={setCountry}
>
  <Option value="us" label="United States" />
  <Option value="uk" label="United Kingdom" />
  <Option value="ca" label="Canada" />
</InputSelect>
```

### InputColor

Color picker input.

```tsx
import { InputColor } from '@stonly/design-system';

<InputColor
  label="Theme Color"
  value={color}
  onChange={setColor}
/>
```

### FieldCheck

Checkbox input.

```tsx
import { FieldCheck } from '@stonly/design-system';

<FieldCheck
  label="I agree to terms"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>
```

### FieldToggle

Toggle switch input.

```tsx
import { FieldToggle } from '@stonly/design-system';

<FieldToggle
  label="Enable notifications"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>
```

### FieldRange

Range slider input.

```tsx
import { FieldRange } from '@stonly/design-system';

<FieldRange
  min={0}
  max={100}
  value={volume}
  onChange={(e) => setVolume(e.target.value)}
/>
```

### Input Helper Components

```tsx
import {
  InputWrap,      // Wrapper with label, message, tooltip
  FieldGroup,     // Groups multiple fields
  ButtonFieldSelect,  // Select trigger button
  ButtonAdditionalAction,  // Additional action button
  ColorRect,      // Color display rectangle
} from '@stonly/design-system';

// InputWrap usage
<InputWrap
  label="Email"
  message="Please enter a valid email"
  status="error"
  required
  tooltip={<span>Help text</span>}
>
  <FieldText />
</InputWrap>

// FieldGroup usage
<FieldGroup>
  <FieldText placeholder="First Name" />
  <FieldText placeholder="Last Name" />
</FieldGroup>
```

---

## Overlay Components

### Tooltip

Shows contextual information on hover/focus.

```typescript
interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  placement?: 'top' | 'top-start' | 'top-end' |
              'right' | 'right-start' | 'right-end' |
              'bottom' | 'bottom-start' | 'bottom-end' |
              'left' | 'left-start' | 'left-end';
  isInitialOpen?: boolean;
  isFlipDisabled?: boolean;
  isFocusListenerEnabled?: boolean;
  isHoverListenerEnabled?: boolean;
  strategy?: 'fixed' | 'absolute';
  offset?: number;
}
```

```tsx
import { Tooltip } from '@stonly/design-system';

<Tooltip content="Save your changes" placement="top">
  <ButtonPrimary>Save</ButtonPrimary>
</Tooltip>
```

### Popover

Flexible overlay container.

```tsx
import { Popover } from '@stonly/design-system';

<Popover
  minWidthPx={200}
  maxWidthPx={400}
  isFocusLocked
>
  <PopoverContent />
</Popover>
```

### Dropdown

Dropdown menu component with positioning.

```typescript
interface DropdownProps {
  as?: Component;  // Trigger component (default: ButtonFieldSelect)
  children: ReactNode;
  placement?: Placement;
  strategy?: 'fixed' | 'absolute';
  mainAxisOffset?: number;
  widthExtendPx?: number;
  maxWidthRatio?: number;
  minWidthRatio?: number;
  widthPx?: number;
  isFlipDisabled?: boolean;
  isFocusLocked?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  closingKeyList?: string[];  // default: ['Escape', 'Tab']
}

// Imperative handle methods
interface DropdownHandle {
  open(): void;
  close(): void;
  isOpen: boolean;
  focus(): void;
  getBoundingClientRect(): DOMRect;
}
```

```tsx
import { Dropdown, DropdownContext } from '@stonly/design-system';

// Basic usage
<Dropdown>
  <DropdownContent>
    <MenuItem onClick={handleEdit}>Edit</MenuItem>
    <MenuItem onClick={handleDelete}>Delete</MenuItem>
  </DropdownContent>
</Dropdown>

// With imperative control
const dropdownRef = useRef<DropdownHandle>(null);

<Dropdown ref={dropdownRef}>
  <DropdownContent />
</Dropdown>

// Open programmatically
dropdownRef.current?.open();
```

### Menu

Menu component for dropdown menus.

```tsx
import { Menu } from '@stonly/design-system';

<Menu
  trigger={<ButtonMinimal iconOnly={<MenuIcon />} />}
  items={[
    { label: 'Edit', onClick: handleEdit },
    { label: 'Delete', onClick: handleDelete },
  ]}
/>
```

---

## Modal Components

### ModalWindow

Basic modal window component.

```typescript
interface ModalWindowProps {
  children: ReactNode;
  onCloseClick?: () => void;
  onBackdropClick?: () => void;
  closePositionTop?: number;
  closePositionRight?: number;
}
```

```tsx
import { ModalWindow } from '@stonly/design-system';

{isOpen && (
  <ModalWindow onCloseClick={() => setIsOpen(false)}>
    <ModalContent>
      <h2>Modal Title</h2>
      <p>Modal content goes here</p>
    </ModalContent>
  </ModalWindow>
)}
```

### ModalPanel

Modal with panel-style sizing.

```tsx
import { ModalPanel } from '@stonly/design-system';

<ModalPanel onCloseClick={handleClose}>
  <PanelContent />
</ModalPanel>
```

### ModalFullscreen

Full-screen modal overlay.

```tsx
import { ModalFullscreen } from '@stonly/design-system';

<ModalFullscreen onCloseClick={handleClose}>
  <FullscreenContent />
</ModalFullscreen>
```

---

## Dialog Components

### WarningDialog

Confirmation/warning dialog.

```typescript
interface WarningDialogProps {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel?: () => void;
}
```

```tsx
import { WarningDialog, useImperativeModalWarningDialog } from '@stonly/design-system';

// Declarative
<WarningDialog
  title="Delete Item"
  message="Are you sure you want to delete this item?"
  confirmLabel="Delete"
  onConfirm={handleDelete}
  onCancel={handleCancel}
/>

// Imperative
const { open, close } = useImperativeModalWarningDialog();

const handleDelete = () => {
  open({
    title: 'Delete Item',
    message: 'Are you sure?',
    confirmLabel: 'Delete',
    onConfirm: () => {
      deleteItem();
      close();
    }
  });
};
```

### ActionsDialog

Dialog with multiple action options.

```tsx
import { ActionsDialog, useImperativeModalActionsDialog } from '@stonly/design-system';

const { open } = useImperativeModalActionsDialog();

open({
  title: 'Choose Action',
  actions: [
    { label: 'Save', onClick: handleSave },
    { label: 'Save As...', onClick: handleSaveAs },
    { label: 'Discard', onClick: handleDiscard },
  ]
});
```

### MiniDialog

Lightweight dialog for simple interactions.

```tsx
import { MiniDialog, DialogSectionHeading } from '@stonly/design-system';

<MiniDialog>
  <DialogSectionHeading>Section Title</DialogSectionHeading>
  <DialogContent />
</MiniDialog>
```

### Dialog Helper Components

```tsx
import {
  DialogHeader,
  DialogFooterWrap,
  DialogContentWrap,
  DialogCloseButton
} from '@stonly/design-system';

<ModalWindow>
  <DialogHeader>
    <h2>Dialog Title</h2>
    <DialogCloseButton onClick={handleClose} />
  </DialogHeader>
  <DialogContentWrap>
    <p>Dialog content</p>
  </DialogContentWrap>
  <DialogFooterWrap>
    <ButtonOutline onClick={handleCancel}>Cancel</ButtonOutline>
    <ButtonPrimary onClick={handleConfirm}>Confirm</ButtonPrimary>
  </DialogFooterWrap>
</ModalWindow>
```

---

## List Components

### List

Visual list presentation components.

```tsx
import {
  List,
  ListItemStandard,
  ListSectionHeading,
  ListSearchInput,
  ListBody,
  ListHeaderTitle
} from '@stonly/design-system';

<List>
  <ListHeaderTitle>My List</ListHeaderTitle>
  <ListSearchInput placeholder="Search..." />
  <ListBody>
    <ListSectionHeading>Section A</ListSectionHeading>
    <ListItemStandard>Item 1</ListItemStandard>
    <ListItemStandard>Item 2</ListItemStandard>
    <ListSectionHeading>Section B</ListSectionHeading>
    <ListItemStandard>Item 3</ListItemStandard>
  </ListBody>
</List>
```

### ListBox

Headless list logic component for keyboard navigation and selection.

```typescript
interface ListBoxProps {
  value?: string | number;
  children: ReactNode;
  onAction?: (value: string | number) => void;
  onPostAction?: () => void;
  autoFocus?: boolean;
}
```

```tsx
import {
  ListBox,
  withListBox,
  withListBoxOption,
  useListBoxOption
} from '@stonly/design-system';

// Using hooks
function MyListItem({ value, label }) {
  const { isHighlighted, isSelected, props } = useListBoxOption(value);

  return (
    <div {...props} className={isHighlighted ? 'highlighted' : ''}>
      {label}
      {isSelected && <CheckIcon />}
    </div>
  );
}

// Using HOC
const MyListBoxItem = withListBoxOption(ListItemStandard);
```

### Select

Dropdown-based selection component. Uses `<Option>` children (not an `items` prop).

```tsx
import { Select, Option } from '@stonly/design-system';

// Single select
<Select
  value={selected}
  onChangeValue={setSelected}
>
  <Option value="1" label="Option 1" />
  <Option value="2" label="Option 2" />
  <Option value="3" label="Option 3" />
</Select>

// Multiple select
<Select
  isMultiple
  value={selectedItems}
  onChangeValue={setSelectedItems}
>
  <Option value="1" label="Option 1" />
  <Option value="2" label="Option 2" />
  <Option value="3" label="Option 3" />
</Select>
```

---

## Other Components

### Calendar

Date picker calendar component.

```tsx
import { Calendar } from '@stonly/design-system';

<Calendar
  value={selectedDate}
  onChange={setSelectedDate}
/>
```

### Notifications

Toast/notification components.

```tsx
import { Notification, NotificationSmall } from '@stonly/design-system';

<Notification
  status="success"
  message="Changes saved successfully"
/>

<NotificationSmall
  status="error"
  message="Error occurred"
/>
```

### Link Components

```tsx
import { LinkPrimary } from '@stonly/design-system';

<LinkPrimary href="/about">About Us</LinkPrimary>
<LinkPrimary href="/docs" iconRight={<ExternalIcon />}>
  Documentation
</LinkPrimary>
```

---

## Status System

Many components support a `status` prop for validation states:

```typescript
type Status = 'error' | 'warning' | 'success' | 'info' | false;
```

Status affects:
- Border color
- Icon display (status indicator)
- Message styling
- ARIA attributes

```tsx
<InputText
  status="error"
  message="This field is required"
/>

<InputText
  status="success"
  message="Valid email address"
/>
```

---

## Static Class Names

For testing, components expose static class names:

```typescript
import { STATIC_CLASS_NAME } from '@stonly/design-system';

// Available class names
STATIC_CLASS_NAME.buttonMinimal
STATIC_CLASS_NAME.dialog
STATIC_CLASS_NAME.dialogContent
STATIC_CLASS_NAME.dropdownTrigger
STATIC_CLASS_NAME.field
STATIC_CLASS_NAME.fieldGroup
STATIC_CLASS_NAME.fieldCheck
STATIC_CLASS_NAME.fieldToggle
STATIC_CLASS_NAME.focusLocked
STATIC_CLASS_NAME.inputLabel
STATIC_CLASS_NAME.inputMessage
STATIC_CLASS_NAME.inputTooltip
STATIC_CLASS_NAME.inputWrap
STATIC_CLASS_NAME.modal
STATIC_CLASS_NAME.modalContainer
STATIC_CLASS_NAME.modalBackdrop
STATIC_CLASS_NAME.modalClose
STATIC_CLASS_NAME.modalFullscreen
STATIC_CLASS_NAME.notification
STATIC_CLASS_NAME.portal
STATIC_CLASS_NAME.statusError
STATIC_CLASS_NAME.statusIcon
STATIC_CLASS_NAME.statusInfo
STATIC_CLASS_NAME.statusSuccess
STATIC_CLASS_NAME.statusWarning
STATIC_CLASS_NAME.tickIcon
STATIC_CLASS_NAME.tooltip
STATIC_CLASS_NAME.tooltipTrigger
```

```tsx
// Testing example
const button = screen.getByClassName(STATIC_CLASS_NAME.buttonMinimal);
const modal = document.querySelector(`.${STATIC_CLASS_NAME.modal}`);
```

---

# Layout Components

The design system provides flexible layout components built on CSS Flexbox with an integrated 8px spacing system.

---

## 8px Spacing System

### Overview

**CRITICAL CONCEPT:** The design system uses an 8px multiplier (`PIXEL_MULTIPLICATOR = 8`) for all spacing values.

When you pass a **numeric value** to any spacing prop (`gap`, `margin`, `padding`), it is automatically multiplied by 8 to get the pixel value.

### Conversion Formula

```typescript
// Internal calculation
const calcValue = (value: number | string) => {
  if (typeof value === 'number') {
    return `${value * 8}px`;  // Multiplied by 8
  }
  return value;  // String values pass through unchanged
};
```

### Quick Reference

| You Write | Result | Note |
|-----------|--------|------|
| `gap={0.5}` | 4px | ✓ Half-step (useful for tight spacing) |
| `gap={1}` | 8px | ✓ Minimal spacing |
| `gap={1.5}` | 12px | ✓ Half-step (useful for fine-tuning) |
| `gap={2}` | 16px | ✓ Standard spacing (most common) |
| `gap={3}` | 24px | ✓ Medium spacing |
| `gap={4}` | 32px | ✓ Large spacing |
| `gap={2.5}` | 20px | ⚠️ Possible but prefer whole numbers |
| `gap={16}` | 128px | ❌ Common mistake! |
| `gap="16px"` | 16px | ✓ Exact value (bypasses multiplier) |
| `margin={2}` | 16px | ✓ Same scale applies |
| `padding={3}` | 24px | ✓ Same scale applies |

### Why 8px?

The 8px grid system provides:
- Visual consistency across all components
- Easier alignment with design tools (Figma uses 8px grid)
- Predictable spacing that scales well
- Harmonious proportions (8, 16, 24, 32, 40...)

**Note:** Half-steps like `0.5` (4px) and `1.5` (12px) are supported and useful for fine-tuning, but prefer whole numbers (1, 2, 3, 4) for better consistency.

### Common Mistakes

```tsx
// ❌ WRONG - Using pixel values as numbers
<RowFlex gap={16} margin={24}>
  {/* Creates 128px gap and 192px margin! */}
</RowFlex>

// ✓ RIGHT - Use scale values
<RowFlex gap={2} margin={3}>
  {/* Creates 16px gap and 24px margin */}
</RowFlex>

// ✓ ALSO RIGHT - Use exact pixel strings
<RowFlex gap="16px" margin="24px">
  {/* Creates exactly 16px gap and 24px margin */}
</RowFlex>
```

---

## Flex Component

The base `Flex` component is a flexible container with comprehensive layout props.

### Import

```typescript
import { Flex, RowFlex, ColumnFlex } from '@stonly/design-system';
```

### Props Reference

```typescript
interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  // Basic
  id?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;

  // Display
  display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'none';

  // Flex container properties
  direction?: 'row' | 'column';
  reverse?: boolean;  // Reverses flex direction
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';

  // Flex item properties
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string | number;

  // Spacing (numbers × 8: gap={2} = 16px, strings pass through: gap="12px" = 12px)
  gap?: string | number;

  // Margin (numbers × 8: margin={2} = 16px, strings pass through: margin="12px" = 12px)
  margin?: string | number;
  marginX?: string | number;      // Left and right
  marginY?: string | number;      // Top and bottom
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;

  // Padding (numbers × 8: padding={2} = 16px, strings pass through: padding="12px" = 12px)
  padding?: string | number;
  paddingX?: string | number;     // Left and right
  paddingY?: string | number;     // Top and bottom
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;

  // Position
  position?: 'relative' | 'absolute';
}
```

### Spacing Props Priority

Spacing props are combined with the following priority (higher overrides lower):

1. `margin` / `padding` - Base value for all sides
2. `marginX` / `paddingX` - Overrides left and right
3. `marginY` / `paddingY` - Overrides top and bottom
4. Individual props (`marginTop`, `paddingLeft`, etc.) - Highest priority

```tsx
// Example: margin=1, marginX=2, marginLeft=3
// Results in: margin-top: 8px, margin-right: 16px, margin-bottom: 8px, margin-left: 24px

<Flex margin={1} marginX={2} marginLeft={3}>
  {children}
</Flex>
```

---

## RowFlex

`RowFlex` is a convenience component that sets `direction="row"` by default.

**⚠️ Spacing Note:** All numeric values in `gap`, `margin`, `padding` props are multiplied by 8. Pass strings for exact pixel values.

### Definition

```typescript
export const RowFlex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  return <Flex {...props} ref={ref} direction="row" />;
});
```

### Usage

```tsx
import { RowFlex } from '@stonly/design-system';

// Horizontal layout with gap
<RowFlex gap={2}>  {/* 16px gap */}
  <Button>Action 1</Button>
  <Button>Action 2</Button>
</RowFlex>

// Centered items with space between
<RowFlex
  gap={2}  {/* 16px gap */}
  alignItems="center"
  justifyContent="space-between"
>
  <Logo />
  <Navigation />
  <UserMenu />
</RowFlex>

// Wrap items on smaller screens
<RowFlex gap={2} flexWrap="wrap">  {/* 16px gap */}
  {items.map(item => <Card key={item.id} />)}
</RowFlex>
```

### Common RowFlex Patterns

```tsx
// Navigation bar
<RowFlex
  padding={2}  {/* 16px padding */}
  alignItems="center"
  justifyContent="space-between"
>
  <Logo />
  <RowFlex gap={2}>  {/* 16px gap */}
    <NavLink>Home</NavLink>
    <NavLink>About</NavLink>
    <NavLink>Contact</NavLink>
  </RowFlex>
</RowFlex>

// Button group
<RowFlex gap={1}>  {/* 8px gap */}
  <ButtonOutline>Cancel</ButtonOutline>
  <ButtonPrimary>Save</ButtonPrimary>
</RowFlex>

// Centered content
<RowFlex
  justifyContent="center"
  alignItems="center"
  style={{ minHeight: '100vh' }}
>
  <LoginForm />
</RowFlex>
```

---

## ColumnFlex

`ColumnFlex` is a convenience component that sets `direction="column"` by default.

**⚠️ Spacing Note:** All numeric values in `gap`, `margin`, `padding` props are multiplied by 8. Pass strings for exact pixel values.

### Definition

```typescript
export const ColumnFlex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  return <Flex {...props} ref={ref} direction="column" />;
});
```

### Usage

```tsx
import { ColumnFlex } from '@stonly/design-system';

// Vertical layout with gap
<ColumnFlex gap={2}>  {/* 16px gap */}
  <InputText label="Name" />
  <InputText label="Email" />
  <ButtonPrimary>Submit</ButtonPrimary>
</ColumnFlex>

// Full-height page layout
<ColumnFlex style={{ minHeight: '100vh' }}>
  <Header />
  <ColumnFlex flexGrow={1}>
    <MainContent />
  </ColumnFlex>
  <Footer />
</ColumnFlex>
```

### Common ColumnFlex Patterns

```tsx
// Form layout
<ColumnFlex gap={2} padding={3}>  {/* 16px gap, 24px padding */}
  <ColumnFlex gap={1}>  {/* 8px gap */}
    <InputText label="First Name" />
    <InputText label="Last Name" />
  </ColumnFlex>
  <InputText label="Email" />
  <InputTextarea label="Message" />
  <RowFlex gap={1} justifyContent="flex-end">  {/* 8px gap */}
    <ButtonOutline>Cancel</ButtonOutline>
    <ButtonPrimary>Submit</ButtonPrimary>
  </RowFlex>
</ColumnFlex>

// Card content
<ColumnFlex gap={2} padding={2}>  {/* 16px gap, 16px padding */}
  <Typography variant="h3">Card Title</Typography>
  <Typography variant="paragraph1">Card description text</Typography>
  <RowFlex gap={1}>  {/* 8px gap */}
    <ButtonLink>Learn more</ButtonLink>
  </RowFlex>
</ColumnFlex>

// Sidebar
<ColumnFlex
  gap={1}  {/* 8px gap */}
  padding={2}  {/* 16px padding */}
  style={{ width: '240px', borderRight: '1px solid' }}
>
  <NavItem>Dashboard</NavItem>
  <NavItem>Settings</NavItem>
  <NavItem>Profile</NavItem>
</ColumnFlex>
```

---

## VisuallyHidden

The `VisuallyHidden` component hides content visually while keeping it accessible to screen readers.

### Import

```typescript
import { VisuallyHidden } from '@stonly/design-system';
```

### Usage

```tsx
// Accessible icon button
<ButtonMinimal iconOnly={<SearchIcon />}>
  <VisuallyHidden>Search</VisuallyHidden>
</ButtonMinimal>

// Skip link
<VisuallyHidden as="a" href="#main-content">
  Skip to main content
</VisuallyHidden>
```

---

## Layout Examples

### Dashboard Layout

```tsx
<ColumnFlex style={{ minHeight: '100vh' }}>
  {/* Header */}
  <RowFlex
    padding={2}  {/* 16px */}
    alignItems="center"
    justifyContent="space-between"
    style={{ borderBottom: '1px solid' }}
  >
    <Logo />
    <UserMenu />
  </RowFlex>

  {/* Main area */}
  <RowFlex flexGrow={1}>
    {/* Sidebar */}
    <ColumnFlex
      gap={1}  {/* 8px */}
      padding={2}  {/* 16px */}
      style={{ width: '240px' }}
    >
      <NavItem>Dashboard</NavItem>
      <NavItem>Reports</NavItem>
      <NavItem>Settings</NavItem>
    </ColumnFlex>

    {/* Content */}
    <ColumnFlex
      flexGrow={1}
      gap={3}  {/* 24px */}
      padding={3}  {/* 24px */}
    >
      <h1>Dashboard</h1>
      <RowFlex gap={2} flexWrap="wrap">  {/* 16px */}
        <StatCard />
        <StatCard />
        <StatCard />
      </RowFlex>
    </ColumnFlex>
  </RowFlex>
</ColumnFlex>
```

### Form Layout

```tsx
<ColumnFlex gap={3} padding={3} style={{ maxWidth: '400px' }}>  {/* 24px gap, 24px padding */}
  <ColumnFlex gap={2}>  {/* 16px gap */}
    <InputText
      label="Username"
      required
      message="Enter your username"
    />
    <InputPassword
      label="Password"
      required
    />
  </ColumnFlex>

  <RowFlex justifyContent="space-between" alignItems="center">
    <FieldCheck label="Remember me" />
    <ButtonLink>Forgot password?</ButtonLink>
  </RowFlex>

  <ButtonPrimary style={{ width: '100%' }}>
    Sign In
  </ButtonPrimary>
</ColumnFlex>
```

### Grid-like Layout

```tsx
<RowFlex gap={2} flexWrap="wrap">  {/* 16px gap */}
  {items.map(item => (
    <ColumnFlex
      key={item.id}
      gap={1}  {/* 8px */}
      padding={2}  {/* 16px */}
      style={{
        width: 'calc(33.333% - 16px)', // 3 columns with gap
        border: '1px solid'
      }}
    >
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </ColumnFlex>
  ))}
</RowFlex>
```

---

## Best Practices

1. **Use scale values (1, 2, 3, 4)** - Numbers are multiplied by 8: `gap={2}` = 16px
2. **Half-steps available (0.5, 1.5)** - Useful for 4px and 12px spacing, but prefer whole numbers when possible
3. **Wrong:** `gap={16}` = 128px ❌ | **Right:** `gap={2}` = 16px ✓
4. **For exact pixels, use strings** - `gap="12px"` bypasses the multiplier
5. **Same applies to margin/padding** - All numeric spacing uses 8px scale
6. **Prefer RowFlex/ColumnFlex** - Clearer intent than base Flex component

```tsx
// ✓ Use scale values
<RowFlex gap={2} padding={3}>  {/* 16px gap, 24px padding */}

// ✓ Or use exact strings
<RowFlex gap="12px" padding="20px">

// ❌ Don't use pixel values as numbers
<RowFlex gap={16} padding={24}>  {/* Results in 128px and 192px! */}
```

---

# Providers

The design system provides context providers that enable various features across your application.

---

## Main Provider

The main `Provider` component combines all design system providers into a single wrapper.

### Import

```typescript
import { Provider } from '@stonly/design-system';
```

### Setup

```tsx
import { ThemeProvider } from 'styled-components';
import { Provider, theme } from '@stonly/design-system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        {/* Your application */}
      </Provider>
    </ThemeProvider>
  );
}
```

### What it includes

The main Provider wraps your app with:
1. `LastEventProvider` - Tracks keyboard vs mouse events
2. `ImperativeModalWindowProvider` - Enables imperative modal control

### Provider Tree

```
<LastEventProvider>
  <ImperativeModalWindowProvider>
    {children}
  </ImperativeModalWindowProvider>
</LastEventProvider>
```

---

## LastEventProvider

Tracks whether the last user interaction was via keyboard or mouse. Used to show/hide focus indicators appropriately.

### Import

```typescript
import {
  LastEventProvider,
  useGetWasLastEventTypeKeyboard,
  LastEventContext
} from '@stonly/design-system';
```

### Context Value

```typescript
interface LastEventContextValue {
  getWasLastEventTypeKeyboard(): boolean;
}
```

### Usage

```tsx
import { useGetWasLastEventTypeKeyboard } from '@stonly/design-system';

function FocusRing({ children }) {
  const getWasLastEventTypeKeyboard = useGetWasLastEventTypeKeyboard();

  return (
    <div
      className={getWasLastEventTypeKeyboard() ? 'show-focus-ring' : ''}
    >
      {children}
    </div>
  );
}
```

### How it works

1. Listens to global `keydown` events - sets flag to `true`
2. Listens to global `mousedown` events - sets flag to `false`
3. Components query this flag to conditionally show focus indicators

### Use Cases

- Show focus outline only when user is navigating via keyboard
- Hide focus rings when user is clicking with mouse
- Improve visual clarity for mouse users while maintaining accessibility

```tsx
// Example: Conditional focus styling
const Button = styled.button`
  outline: none;

  &:focus {
    /* Only show focus ring if last event was keyboard */
    .show-keyboard-focus & {
      box-shadow: 0 0 0 2px ${color.borderFocus};
    }
  }
`;
```

---

## ImperativeModalWindowProvider

Enables imperative (programmatic) control of modal windows throughout your application.

### Import

```typescript
import {
  ImperativeModalWindowProvider,
  useImperativeModalWindow,
  ImperativeModalWindowContext
} from '@stonly/design-system';
```

### Context Methods

```typescript
interface ImperativeModalWindowContextValue {
  open(content: ReactNode, options?: ModalWindowOptions): void;
  openComponent<P>(
    component: React.ComponentType<P>,
    props: P,
    options?: ModalWindowOptions
  ): void;
  close(): void;
}

interface ModalWindowOptions {
  onCloseClick?: () => void;
  onBackdropClick?: () => void;
  closePositionTop?: number;
  closePositionRight?: number;
}
```

### Usage

```tsx
import { useImperativeModalWindow } from '@stonly/design-system';

function MyComponent() {
  const modal = useImperativeModalWindow();

  // Open with content
  const showModal = () => {
    modal.open(
      <div>
        <h2>Modal Content</h2>
        <p>This is the modal body</p>
        <button onClick={modal.close}>Close</button>
      </div>,
      {
        onBackdropClick: modal.close,
        onCloseClick: modal.close
      }
    );
  };

  // Open with component
  const showConfirmation = () => {
    modal.openComponent(
      ConfirmDialog,
      {
        title: 'Confirm Action',
        message: 'Are you sure?',
        onConfirm: () => {
          performAction();
          modal.close();
        },
        onCancel: modal.close
      }
    );
  };

  return (
    <>
      <button onClick={showModal}>Show Modal</button>
      <button onClick={showConfirmation}>Show Confirmation</button>
    </>
  );
}
```

### Singleton Pattern

The `ImperativeModalWindowProvider` manages a single modal instance. Opening a new modal will replace any existing open modal.

```tsx
// This will close the first modal and open the second
modal.open(<FirstModal />);
modal.open(<SecondModal />);  // First modal is replaced
```

### Integration with Dialog Components

The design system provides specialized hooks built on this provider:

```typescript
import {
  useImperativeModalWarningDialog,
  useImperativeModalActionsDialog
} from '@stonly/design-system';

// Warning dialog
const warningDialog = useImperativeModalWarningDialog();
warningDialog.open({
  title: 'Warning',
  message: 'Are you sure you want to proceed?',
  onConfirm: handleConfirm
});

// Actions dialog
const actionsDialog = useImperativeModalActionsDialog();
actionsDialog.open({
  title: 'Choose Option',
  actions: [
    { label: 'Option A', onClick: handleA },
    { label: 'Option B', onClick: handleB }
  ]
});
```

---

## Provider Setup Guide

### Minimal Setup

```tsx
import { ThemeProvider } from 'styled-components';
import { Provider, theme } from '@stonly/design-system';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
```

### With Custom Theme

```tsx
import { ThemeProvider } from 'styled-components';
import { Provider, theme } from '@stonly/design-system';

const customTheme = {
  ...theme,
  // Override specific values
  color: {
    ...theme.color,
    backgroundPrimary: '#custom-color'
  }
};

<ThemeProvider theme={customTheme}>
  <Provider>
    <App />
  </Provider>
</ThemeProvider>
```

### With Additional Providers

```tsx
import { ThemeProvider } from 'styled-components';
import { Provider, theme } from '@stonly/design-system';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  <ThemeProvider theme={theme}>
    <Provider>
      <App />
    </Provider>
  </ThemeProvider>
</QueryClientProvider>
```

---

## Best Practices

### 1. Provider Order

Always wrap design system Provider inside ThemeProvider:

```tsx
// Correct
<ThemeProvider theme={theme}>
  <Provider>
    <App />
  </Provider>
</ThemeProvider>

// Incorrect - theme won't be available
<Provider>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
</Provider>
```

### 2. Single Provider Instance

Use only one Provider at the root of your app. Nested providers can cause unexpected behavior:

```tsx
// Correct
<Provider>
  <ComponentA />
  <ComponentB />
</Provider>

// Avoid - nested providers
<Provider>
  <ComponentA>
    <Provider>  {/* Don't do this */}
      <ComponentB />
    </Provider>
  </ComponentA>
</Provider>
```

### 3. Testing Setup

In tests, wrap components with the provider:

```tsx
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Provider, theme } from '@stonly/design-system';

const renderWithProviders = (ui) => {
  return render(
    <ThemeProvider theme={theme}>
      <Provider>
        {ui}
      </Provider>
    </ThemeProvider>
  );
};

test('renders component', () => {
  renderWithProviders(<MyComponent />);
});
```

### 4. Storybook Decorator

Use providers as a decorator in Storybook:

```tsx
// .storybook/preview.tsx
import { ThemeProvider } from 'styled-components';
import { Provider, theme } from '@stonly/design-system';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Provider>
        <Story />
      </Provider>
    </ThemeProvider>
  ),
];
```

---

## Troubleshooting

### Modal not opening

Ensure the `ImperativeModalWindowProvider` is in your component tree:

```tsx
// Check if provider is present
const modal = useImperativeModalWindow();
if (!modal) {
  console.error('ImperativeModalWindowProvider not found');
}
```

### Focus indicators always showing

Check that `LastEventProvider` is properly set up. The provider listens to global events, so it should be near the root of your app.

### Theme not applying

Verify the order of providers. `ThemeProvider` must wrap the design system `Provider`.

---

# Utilities

The design system provides utility functions, hooks, and helper components for common UI patterns.

---

## Portal

Renders children into a separate DOM container outside the React tree.

### Import

```typescript
import { Portal } from '@stonly/design-system';
```

### Props

```typescript
interface PortalProps {
  children: ReactNode;
  zIndex?: number;  // default: theme.zIndex.modal (1000)
}
```

### Usage

```tsx
import { Portal } from '@stonly/design-system';

// Basic portal
<Portal>
  <ModalContent />
</Portal>

// Custom z-index
<Portal zIndex={1200}>
  <TooltipContent />
</Portal>
```

### Behavior

- Creates a dedicated DOM node as portal container
- Applies z-index via inline style
- Automatically cleans up empty portal nodes after unmount (100ms delay)
- Static class: `STATIC_CLASS_NAME.portal`

---

## FocusLock

Traps keyboard focus within a container element.

### Import

```typescript
import { FocusLock } from '@stonly/design-system';
```

### Props

```typescript
interface FocusLockProps {
  children: ReactNode;
  isFocusLocked?: boolean;  // default: true
}
```

### Usage

```tsx
import { FocusLock } from '@stonly/design-system';

// Basic usage
<FocusLock>
  <DialogContent>
    <input type="text" />
    <button>Cancel</button>
    <button>Confirm</button>
  </DialogContent>
</FocusLock>

// Conditionally enabled
<FocusLock isFocusLocked={isModalOpen}>
  <ModalContent />
</FocusLock>
```

### Behavior

- Intercepts Tab key to cycle through focusable elements
- First Tab press moves focus to first focusable element
- Shift+Tab from first element moves to last element
- Tab from last element moves to first element
- Prevents nested focus lock conflicts
- Static class: `STATIC_CLASS_NAME.focusLocked`

---

## IconSvg

SVG icon component with theme color support.

### Import

```typescript
import { IconSvg } from '@stonly/design-system';
```

### Props

```typescript
interface IconSvgProps extends SVGProps<SVGSVGElement> {
  as: React.FC<SVGProps<SVGSVGElement>>;  // SVG component
  color?: ((theme: Theme) => string) | string;
}
```

### Usage

```tsx
import { IconSvg } from '@stonly/design-system';
import PlusIcon from './icons/Plus.svg';

// With theme color function
<IconSvg
  as={PlusIcon}
  color={(theme) => theme.color.iconDefault}
/>

// With static color
<IconSvg
  as={PlusIcon}
  color="#FF0000"
/>

// Default (uses currentColor)
<IconSvg as={PlusIcon} />
```

### Color Preservation

Add `color-frozen` class to SVG elements that should not be color-changed:

```svg
<path class="color-frozen" fill="#FF0000" />
```

---

## IconSrc

Image-based icon component.

### Import

```typescript
import { IconSrc } from '@stonly/design-system';
```

### Usage

```tsx
import { IconSrc } from '@stonly/design-system';

<IconSrc src="/icons/logo.png" alt="Logo" />
```

---

## StackNavigator

Navigation state management for multi-screen flows.

### Import

```typescript
import {
  StackNavigator,
  useStackNavigationState
} from '@stonly/design-system';
```

### State Interface

```typescript
interface StackNavigatorState {
  pushState(path: string): void;
  back(): void;
  reset(): void;
  navigationStack: string[];
  rootSlug: string;
  isActive: boolean;
  checkIsCurrentSlug(slug: string): boolean;
  canGoBack: boolean;
  isNested: boolean;
}
```

### Usage

```tsx
import { useStackNavigationState } from '@stonly/design-system';

function WizardFlow() {
  const nav = useStackNavigationState('step-1');

  return (
    <div>
      {nav.checkIsCurrentSlug('step-1') && (
        <Step1 onNext={() => nav.pushState('step-2')} />
      )}
      {nav.checkIsCurrentSlug('step-2') && (
        <Step2
          onBack={nav.back}
          onNext={() => nav.pushState('step-3')}
        />
      )}
      {nav.checkIsCurrentSlug('step-3') && (
        <Step3 onBack={nav.back} onFinish={nav.reset} />
      )}

      {nav.canGoBack && (
        <button onClick={nav.back}>Back</button>
      )}
    </div>
  );
}
```

---

## Interaction Utilities

Advanced utilities for building accessible interactive components.

### InteractionHighlight

Manages keyboard navigation (arrow key highlighting).

```typescript
import {
  InteractionHighlightProvider,
  InteractionHighlightContainerContext,
  InteractionHighlightItemContext,
  useInteractionHighlightItem,
  useInteractionHighlightContainer
} from '@stonly/design-system';
```

#### Data Attributes

| Attribute | Description |
|-----------|-------------|
| `data-h-uuid` | Unique item identifier |
| `data-h-dis` | Whether item is disabled |
| `data-h-pri` | Prioritized (auto-highlight on first key) |

#### Usage

```tsx
import {
  InteractionHighlightProvider,
  useInteractionHighlightContainer,
  useInteractionHighlightItem
} from '@stonly/design-system';

function ListContainer({ children }) {
  const { containerProps } = useInteractionHighlightContainer();
  return <div {...containerProps}>{children}</div>;
}

function ListItem({ value, children }) {
  const { itemProps, isHighlighted } = useInteractionHighlightItem(value);

  return (
    <div
      {...itemProps}
      className={isHighlighted ? 'highlighted' : ''}
    >
      {children}
    </div>
  );
}

// Usage
<InteractionHighlightProvider>
  <ListContainer>
    <ListItem value="1">Item 1</ListItem>
    <ListItem value="2">Item 2</ListItem>
  </ListContainer>
</InteractionHighlightProvider>
```

### InteractionAction

Manages item activation (click, Enter, Space).

```typescript
import {
  InteractionActionProvider,
  useInteractionActionContainer,
  useInteractionActionItem
} from '@stonly/design-system';
```

#### Usage

```tsx
import {
  InteractionActionProvider,
  useInteractionActionContainer,
  useInteractionActionItem
} from '@stonly/design-system';

function ActionContainer({ children, onItemAction }) {
  const { containerProps } = useInteractionActionContainer({
    onPostAction: onItemAction
  });
  return <div {...containerProps}>{children}</div>;
}

function ActionItem({ onSelect, children }) {
  const { itemProps } = useInteractionActionItem(onSelect);
  return <div {...itemProps}>{children}</div>;
}

// Returns { preventPostAction: true } to skip onPostAction
```

### InteractionSelect

Manages selection state.

```typescript
import {
  InteractionSelectProvider,
  useInteractionSelectItem
} from '@stonly/design-system';
```

### InteractionScroll

Scrolls highlighted items into view.

```typescript
import {
  InteractionScrollProvider,
  useInteractionScrollContainer,
  useInteractionScrollItem
} from '@stonly/design-system';
```

---

## DOM Utilities

### useDomId

Generates or uses a stable DOM ID.

```typescript
import { useDomId } from '@stonly/design-system';

function MyComponent({ id }) {
  const domId = useDomId(id);
  // Returns provided id or generates stable unique id
  return <div id={domId}>...</div>;
}
```

### ID Generators

```typescript
import {
  generateErrorMessageDomId,
  generateLabelDomId,
  generateDescribeDomId,
  generateListboxDomId,
  generateDialogDomId
} from '@stonly/design-system';

// Generate related element IDs
const baseId = 'username-field';
const errorId = generateErrorMessageDomId(baseId, hasError);
// Returns: 'errormessage-for-username-field' or ''

const labelId = generateLabelDomId(baseId, hasLabel);
// Returns: 'label-for-username-field' or ''
```

### useDomElementSize

Tracks element width on resize.

```typescript
import { useDomElementSize } from '@stonly/design-system';

function MyComponent() {
  const ref = useRef<HTMLDivElement>(null);
  const width = useDomElementSize(ref);

  return <div ref={ref}>Width: {width}px</div>;
}
```

### isNodeScrolledIntoView

Checks if element is visible in viewport.

```typescript
import { isNodeScrolledIntoView } from '@stonly/design-system';

const isVisible = isNodeScrolledIntoView(element);
```

### mergeRefs

Combines multiple refs into one.

```typescript
import { mergeRefs } from '@stonly/design-system';

const MyComponent = forwardRef((props, forwardedRef) => {
  const localRef = useRef();
  return <div ref={mergeRefs(localRef, forwardedRef)} />;
});
```

### mergeClassNames

Combines class names, filtering falsy values.

```typescript
import { mergeClassNames } from '@stonly/design-system';

const className = mergeClassNames(
  'base-class',
  isActive && 'active',
  isDisabled && 'disabled'
);
// Returns: 'base-class active' (if active is true, disabled is false)
```

### useEffectSkipMount

Effect hook that skips the initial mount.

```typescript
import { useEffectSkipMount } from '@stonly/design-system';

useEffectSkipMount(() => {
  // Only runs on subsequent renders, not on mount
  console.log('Value changed:', value);
}, [value]);
```

### useReducedMotion

Checks for prefers-reduced-motion setting.

```typescript
import { useReducedMotion } from '@stonly/design-system';

function AnimatedComponent() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
    />
  );
}
```

---

## Keyboard Utilities

### useOnKeysDown

Handles specific keyboard events.

```typescript
import { useOnKeysDown } from '@stonly/design-system';

// Supported keys: 'Escape', 'Enter', 'Tab', 'ArrowDown', 'ArrowUp'

function MyComponent() {
  useOnKeysDown({
    eventKeyList: ['Escape', 'Enter'],
    callback: (event) => {
      if (event.key === 'Escape') {
        handleClose();
      } else if (event.key === 'Enter') {
        handleSubmit();
      }
    },
    condition: isOpen  // Optional: only active when true
  });

  return <div>...</div>;
}
```

---

## Click Outside Utility

### useOnClickOutside

Handles clicks outside an element.

```typescript
import { useOnClickOutside } from '@stonly/design-system';

function Dropdown({ triggerRef }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useOnClickOutside({
    elementRef: contentRef,
    exceptionRef: triggerRef,  // Don't close when clicking trigger
    callback: () => setIsOpen(false),
    condition: isOpen
  });

  return <div ref={contentRef}>...</div>;
}
```

---

## DOM Event Helpers

```typescript
import {
  stopPropagation,
  preventDefault,
  stopPropagationAndPreventDefault
} from '@stonly/design-system';

// Usage
<button onClick={stopPropagation(handleClick)}>
  Click
</button>

<form onSubmit={preventDefault(handleSubmit)}>
  ...
</form>

<a onClick={stopPropagationAndPreventDefault(handleLinkClick)}>
  Link
</a>
```

---

## DOM Node Helpers

```typescript
import {
  getFirstFocusableElement,
  getLastFocusableElement,
  getAllFocusableElements
} from '@stonly/design-system';

// Get focusable elements within a container
const container = document.getElementById('modal');
const firstFocusable = getFirstFocusableElement(container);
const lastFocusable = getLastFocusableElement(container);
const allFocusable = getAllFocusableElements(container);
```

---

## DOM Element Resize Events

```typescript
import {
  addResizeEventListener,
  removeResizeEventListener
} from '@stonly/design-system';

// Listen for element resize
const cleanup = addResizeEventListener(element, () => {
  console.log('Element resized');
});

// Later: cleanup()
```

---

## Usage Patterns

### Building an Accessible Dropdown

```tsx
import {
  Portal,
  FocusLock,
  useOnKeysDown,
  useOnClickOutside,
  InteractionHighlightProvider,
  InteractionActionProvider
} from '@stonly/design-system';

function MyDropdown({ trigger, children, onClose }) {
  const triggerRef = useRef();
  const contentRef = useRef();

  useOnKeysDown({
    eventKeyList: ['Escape'],
    callback: onClose,
    condition: isOpen
  });

  useOnClickOutside({
    elementRef: contentRef,
    exceptionRef: triggerRef,
    callback: onClose,
    condition: isOpen
  });

  return (
    <>
      <button ref={triggerRef} onClick={toggle}>
        {trigger}
      </button>
      {isOpen && (
        <Portal>
          <FocusLock>
            <InteractionHighlightProvider>
              <InteractionActionProvider onPostAction={onClose}>
                <div ref={contentRef}>
                  {children}
                </div>
              </InteractionActionProvider>
            </InteractionHighlightProvider>
          </FocusLock>
        </Portal>
      )}
    </>
  );
}
```
