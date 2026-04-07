# Design Guidelines Plan (Blue + Black System)

## 1) Core Visual Direction
- **Style**: Minimal, technical, high-contrast, flat UI.
- **Color usage**: **Solid colors only**.
- **Forbidden effects**: No gradients, no glassmorphism, no shadows.
- **Borders**: **No borders anywhere** (buttons, cards, inputs, sections, modals, tables).

---

## 2) Exact Color Theme (Blue + Black Ranges)

### Primary Blues
- `--blue-900: #0A1F44` (deep navy)
- `--blue-700: #144E9C` (primary action blue)
- `--blue-500: #1F6FEB` (interactive blue)
- `--blue-300: #79A9FF` (secondary highlight)

### Black / Neutral Range
- `--black-1000: #000000` (true black)
- `--black-950: #0B0B0B` (main background)
- `--black-900: #111317` (surface base)
- `--black-800: #1A1D22` (raised surface substitute)
- `--black-700: #262B33` (inactive blocks)

### Text Colors
- `--text-primary: #F5F7FA`
- `--text-secondary: #B8C0CC`
- `--text-muted: #8B95A5`
- `--text-on-blue: #FFFFFF`

### Status Colors (solid, flat)
- Success: `#1E8E5A`
- Warning: `#D18B00`
- Error: `#C9363E`
- Info: `#1F6FEB`

---

## 3) Typography (Exact Fonts)

- **Title font file**: `/fonts/title.ttf`
- **Paragraph font file**: `/fonts/paragraph.ttf`

### Font Usage Rules
- **Titles** (H1, H2, H3): use `/fonts/title.ttf`
- **Normal paragraph content** (Body L, Body, Small, Caption): use `/fonts/paragraph.ttf`
- **Button/UI labels**: use `/fonts/title.ttf`

### Weights
- Heading: 700
- Subheading: 600
- Body: 400
- Button/UI labels: 600

### Type Scale
- H1: 40/48
- H2: 32/40
- H3: 24/32
- Body L: 18/28
- Body: 16/24
- Small: 14/20
- Caption: 12/16

---

## 4) Geometry and Radius Rules (Strict)
- Global default radius token: `0px`
- Special rule for buttons and cards only:
    - `border-radius: 0 0 4px 0;`
    - (Top-left 0, top-right 0, bottom-left 0, bottom-right 4px)
- All other components: `border-radius: 0`
- No rounded pills/circles except icons/images that are intrinsically circular.

---

## 5) Layout and Spacing
- 8px spacing system: `4, 8, 12, 16, 24, 32, 48, 64`
- Container max width: `1200px`
- Section vertical padding: `64px`
- Grid: 12-column desktop, 8 tablet, 4 mobile
- Separation method: spacing + background tone shifts only (not borders/shadows)

---

## 6) Component Specifications

## Buttons
- Fill-only style, no border, no shadow
- Radius: `0 0 4px 0`
- Primary: bg `#1F6FEB`, text `#FFFFFF`
- Secondary: bg `#1A1D22`, text `#F5F7FA`
- Hover: darken by 8%
- Active: darken by 14%
- Disabled: bg `#262B33`, text `#8B95A5`

## Cards
- Background: `#111317` or `#1A1D22`
- No border, no shadow
- Radius: `0 0 4px 0`
- Internal padding: `24px`
- Title/body spacing: `12px`

## Inputs
- Background: `#1A1D22`
- Text: `#F5F7FA`
- Placeholder: `#8B95A5`
- No border, no shadow, no glow
- Focus state: background shift to `#262B33` + label color `#79A9FF`

## Navigation
- Header bg: `#0B0B0B`
- Active item bg: `#144E9C`
- Inactive item text: `#B8C0CC`
- No underlines/borders as separators

---

## 7) Accessibility and Contrast Rules
- Minimum contrast for body text: **4.5:1**
- Large text/UI labels: **3:1** minimum
- Never place muted text on `#1A1D22` if contrast fails
- All interactive elements require distinct hover + active solid fills

---

## 8) Hard “Do Not Use” List
- No gradients
- No glass/blur/transparency panels
- No shadows of any kind
- No borders of any kind
- No multi-color backgrounds in a single component
- No corner rounding except bottom-right 4px on buttons/cards only

---

## 9) Implementation Tokens (CSS)
```css
:root {
    --blue-900: #0A1F44;
    --blue-700: #144E9C;
    --blue-500: #1F6FEB;
    --blue-300: #79A9FF;

    --black-1000: #000000;
    --black-950: #0B0B0B;
    --black-900: #111317;
    --black-800: #1A1D22;
    --black-700: #262B33;

    --text-primary: #F5F7FA;
    --text-secondary: #B8C0CC;
    --text-muted: #8B95A5;

    --radius-none: 0px;
    --radius-br-only: 0 0 4px 0;
}
```

## 10) Approval Checklist
- [ ] Only blue/black palette used
- [ ] All colors are solid fills
- [ ] No gradients/glass/shadows
- [ ] No borders anywhere
- [ ] Buttons/cards use `0 0 4px 0` radius only
- [ ] Font is exactly `Inter`
- [ ] Contrast passes accessibility targets
- [ ] Spacing follows 8px system