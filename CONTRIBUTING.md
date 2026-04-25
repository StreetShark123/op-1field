# Contributing

Thanks for helping improve this OP-1 Field course.

## What matters most

- Keep the app offline-first and simple.
- Keep the pedagogical voice practical and clear.
- Keep OP-1 Field claims verified (or framed as practical approximations).
- Keep locale parity (`es`, `en`, `ja`) for structure and interaction.

## Quick start

1. Fork and clone the repository.
2. Install dependencies with `npm install`.
3. Run the app with `npm run dev`.
4. Run checks with `npm run qa`.
5. Open a pull request using the PR template.

## Suggested workflow

1. Pick one scope per PR (for example: Tape module, FM section, a widget, or one locale pass).
2. Make your edits.
3. Run:
   - `npm run qa`
   - `npm run test:e2e` (recommended for structural/UI changes)
4. Add a clear PR description and testing notes.

## Content safety rules

- Do not change HTML ids, anchor ids (`mX-sY`), `onclick` function names, or widget ids unless required.
- Do not remove course material.
- Do not present fixed mix values as universal truths.
- Do not introduce OP-1 shortcuts that are not documented or clearly marked as approximation.
- If you add a block labeled as interactive, include a real widget right there.

## Locale rules

- Keep module coverage complete in all locales (`m0..m15`).
- If you add a new section or widget in one locale, mirror the structure in the others.
- Keep UI/device labels in English where they match the OP-1 Field interface.

## Style references

- Editorial style: [`STYLE_GUIDE.md`](/Users/axelsearagomez/Downloads/op-1field/STYLE_GUIDE.md)
- Technical editing map: [`docs/EDITING_GUIDE.md`](/Users/axelsearagomez/Downloads/op-1field/docs/EDITING_GUIDE.md)
