# Climate Seal Animation Guide

Use motion to clarify hierarchy and interaction. Avoid animation that makes static content look clickable.

## Principles

- Motion should explain state, hierarchy, or action.
- Static informational cards should not lift, scale, glow, or change shadow on hover.
- Clickable cards, links, buttons, tabs, accordions, and menus may respond on hover or open state.
- Keep motion calm and utilitarian. Climate Seal is a B2B compliance platform, so animation should feel precise rather than playful.
- Prefer short durations: 150-250ms for interaction feedback, 400-600ms for section reveals.
- Stagger repeated blocks lightly: 60-100ms between items.
- Avoid infinite animation except for true loading states or subtle video/product demos.

## Standard Patterns

### Page Hero

Use a simple entrance for H1 and supporting copy:

- `opacity: 0 -> 1`
- `y: 20 -> 0`
- duration: `0.55-0.65s`
- optional delay: body copy `0.15-0.2s`

Do not animate every small element in the hero. One or two reveals are enough.

### Section Headers

Use one reveal per section header group:

- `opacity: 0 -> 1`
- `y: 16 -> 0`
- duration: `0.4-0.5s`
- viewport once

### Static Informational Cards

Use scroll-in reveal only:

- `opacity: 0 -> 1`
- `y: 14-20 -> 0`
- duration: `0.4-0.5s`
- stagger: `index * 0.06-0.1`

Do not add hover shadow, hover border, hover scale, pointer cursor, or arrow movement.

### Clickable Cards

Clickable cards may use hover feedback:

- slight border color change
- subtle shadow increase
- optional image scale: `1 -> 1.03`
- optional arrow translate: `x: 0 -> 4px`

Do not use hover effects unless the whole card is a `Link`, button, or otherwise clickable.

### Buttons And Text Links

Buttons can change background or text color on hover. Keep transforms minimal.

Preferred:

- primary button: background darkens
- secondary button: background fills softly
- text link arrow: translate right slightly

Avoid button scale unless used in highly interactive media/demo components.

### Accordions, Tabs, And Menus

These are interactive and should show state:

- accordions: chevron rotation, panel height transition
- tabs: active fill and border
- menus: dropdown fade/slide if needed

Keep transitions around `150-250ms`.

## Audit Rules

When reviewing animation, ask:

1. Is the element clickable?
2. If yes, does the hover state make the action clearer?
3. If no, is the animation only a scroll reveal or static emphasis?
4. Does motion compete with the page message?
5. Does the same component type behave consistently across pages?

## Current Site Direction

- Homepage static platform and capability cards use staggered scroll-in reveal.
- Homepage linked solution/resource/referral cards keep hover feedback.
- Solution-page challenge cards use scroll reveal only.
- Partner-program related resource cards are links and may keep hover feedback.
- FAQ accordions and category tabs keep open/active state transitions.
