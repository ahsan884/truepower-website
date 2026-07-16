# TruPower Website

## Project

Single-page marketing website for TruPower (Battery Energy Storage Systems).

## Tech Stack

-   Next.js 16 (App Router, TypeScript, `src/` directory, Turbopack)
-   Tailwind CSS v4 (CSS-based `@theme` design tokens)
-   next/font (Inter)

## Status

🟡 Revision in progress — mockup replaced, header/footer simplified per new design, pending final approval

## Progress

-   [x] Project Setup Planning
-   [x] Design Analysis (mockup section inventory, color/token sampling, asset mapping)
-   [x] Next.js Scaffold
-   [x] Design Tokens & Base Config
-   [x] Asset Preparation
-   [x] UI Primitives (Button, Container, SectionHeading, Logo, FeatureCard, IconFeature, CheckListItem, StatItem, SolutionCard, SocialIcon, icons)
-   [x] Header (logo-only, per revised mockup — nav/CTA button removed from render, kept in codebase)
-   [x] Hero Section
-   [x] Feature Highlights Bar
-   [x] Reliable Energy From Cold To Heat Section
-   [x] Solutions at a Glance Section
-   [x] Smarter Storage / Why TruPower Section
-   [x] Stats Bar (revised: 3 stats, divided inline group)
-   [x] CTA Banner (revised: "Contact Us" mailto button + hex-texture background)
-   [x] Footer (built, currently unrendered per revised mockup — kept in codebase pending approval)
-   [x] Responsive QA (mobile / tablet / desktop)
-   [x] Accessibility Pass (landmarks, headings, alt text, contrast, focus states, mobile drawer keyboard/Escape support)
-   [x] SEO (metadata, OpenGraph/Twitter, sitemap.ts, robots.ts, icon.svg)
-   [x] Lint / Typecheck / Production Build Clean
-   [x] Git Repository Initialized
-   [ ] Vercel Deployment

## Current Task

Revised implementation delivered for review. Awaiting client sign-off on the simplified header/footer direction before permanently deleting the unused `Footer`/`MobileNav`/navigation code, and before deployment.

## Notes

-   Mockup was replaced mid-project (`Mockups/TruePower Mockup.jpg`, was `.png`). The new version removes header nav, removes the "Get a Quote" button, restructures the logo (stacked lockup + new tagline "Energy Division of Majestic Crop Sciences Group"), drops the "1000+ Projects Worldwide" stat, changes the CTA button to "Contact Us", adds a hex-pattern CTA background texture, and removes the footer entirely (page now ends after the CTA banner).
-   Per client direction, the header nav and footer are **hidden from the rendered page, not deleted** — `src/components/layout/Footer.tsx`, `src/components/layout/MobileNav.tsx`, `src/content/navigation.ts`, `src/content/footer.ts`, and `src/components/ui/SocialIcon.tsx` remain in the codebase, simply unused by `page.tsx`, pending final design approval.
-   Icon policy tightened this round: per client instruction, all icons now use the **official assets from `Assets/icon/`** (via `next/image`) rather than hand-drawn SVG reproductions — feature bar, cold-to-heat mini-features, checklist tick, and two of the three stat icons. The one exception is the "Years ROI" stat icon, which has no corresponding asset in `Assets/` and is hand-drawn to match the outline style of the surrounding icons.
-   The header Logo now renders the official `Assets/icon/trupower-icon.png` (hexagon + wordmark, already stacked in the source asset) instead of a hand-drawn mark; only the tagline below it is live text.
-   Design tokens sampled directly from the original mockup: background `#0A0A0A`, surface `#141416`, brand green `#68A902`. Contrast-checked against WCAG AA (brand green on background ≈6.85:1, secondary text ≈7.85:1, black-on-green button ≈7.26:1).
-   Content (features, stats, solutions, why-trupower checklist) lives in `src/content/*.ts`, decoupled from JSX.
-   Fixed one real responsive bug during the first QA pass: footer grid was `lg:grid-cols-5` with a `col-span-2` logo block, causing 6 column-tracks to be requested and the last column to wrap to a new row — corrected to `lg:grid-cols-6` (footer is currently unrendered but the fix remains in place for whenever it's restored).
-   Full original architecture plan on file at `C:\Users\Lenovo\.claude\plans\misty-tumbling-scott.md`.
