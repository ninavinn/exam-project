# DevStack Innovation Hub

A responsive frontend project created for the **Front-end Programming** final
assessment — module _Version Control Using Git Technology_ (Skillwill).

It demonstrates semantic HTML5, modern CSS (Grid, Flexbox, custom properties),
light JavaScript enhancements and a complete Git/GitHub workflow.

## Features

- Semantic HTML5 structure with a skip link and keyboard-friendly focus styles
- Fully responsive layout (desktop, tablet, mobile)
- Dark interface with gradient accents and a reusable design system
- Sticky navigation that highlights the current section
- Scroll progress bar, back-to-top button, click-to-copy Git commands
- Respects `prefers-reduced-motion`; print-friendly styles

## Project Structure

```text
exam-project/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Getting Started

```bash
git clone https://github.com/ninavinn/exam-project.git
cd exam-project
```

Open `index.html` in a browser (or use the VS Code Live Server extension).
No dependencies are required.

## Git Workflow Demonstrated

| Stage        | Branch(es)               | What happened                                                         |
| ------------ | ------------------------ | --------------------------------------------------------------------- |
| 1. Basics    | `main`                   | `git init`, first commit, `git remote add origin`, `git push`         |
| 2. Branching | `feature-header`         | Header added, pushed, merged into `main`                              |
| 3. Conflicts | `nav-feature`, `nav-alt` | Same lines edited on both branches, conflict resolved, menus combined |
| 4. Polish    | `feature-polish`         | Full landing page, CSS and JS enhancements merged into `main`         |

Inspect the full history with:

```bash
git log --oneline --graph --all
```

## Author

Nino Vinogradova — Skillwill Front-end Programming, 2026
