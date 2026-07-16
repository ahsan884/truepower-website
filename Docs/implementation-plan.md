# Implementation Plan

## Status: Phases 1–4 Complete, Phase 5 Pending Client Go-Ahead

## Phase 1 — Planning (Complete)

-   Analyzed the mockup section by section
-   Sampled design tokens (colors) directly from the mockup image
-   Mapped every asset in `Assets/` to its target section, identified gaps (Warranty/ROI stat icons — no source asset)
-   Defined component hierarchy and reusable UI primitives
-   Defined folder structure (Next.js App Router, `src/` layout)
-   Defined responsive strategy per section
-   Full plan on file at `C:\Users\Lenovo\.claude\plans\misty-tumbling-scott.md`

## Phase 2 — Setup (Complete)

1.  [x] Scaffold Next.js app in `Web/` (TypeScript, Tailwind CSS v4, App Router, `src/` dir, ESLint)
2.  [x] Initialize git repository + `.gitignore`
3.  [x] Configure design tokens (CSS variables in `globals.css`) and `next/font` (Inter)
4.  [x] Copy/organize photographic assets into `Web/public/images/`
5.  [x] Scaffold `src/content/` typed data files and `src/types/index.ts`

## Phase 3 — Component Development (Complete)

1.  [x] UI primitives: `Button`, `Container`, `SectionHeading`, `Logo`, `FeatureCard`, `IconFeature`, `CheckListItem`, `StatItem`, `SolutionCard`, `SocialIcon`, inline SVG icons
2.  [x] Layout: `Header` (+ `MobileNav`), `Footer`
3.  [x] Sections in page order:
    1.  Hero
    2.  Feature Highlights bar
    3.  Reliable Energy From Cold To Heat
    4.  Solutions at a Glance
    5.  Smarter Storage / Why TruPower
    6.  Stats Bar
    7.  CTA Banner
4.  [x] Compose all sections in `app/page.tsx`

## Phase 4 — Optimization (Complete)

-   [x] Responsive Testing (mobile 375px screenshots + tablet 768px / desktop 1440px DOM bounding-box verification)
-   [x] Accessibility Review (landmarks, alt text, focus states, contrast ratios computed against WCAG AA, keyboard-dismissible mobile drawer)
-   [x] SEO Implementation (Metadata API, `sitemap.ts`, `robots.ts`, OpenGraph/Twitter card, `icon.svg`)
-   [x] Performance Optimization (`next/image` with explicit dimensions, `next/font`, lint + typecheck + production build all clean)

## Phase 5 — Deployment

-   GitHub Repository
-   Vercel Deployment
-   Final QA against mockup
-   Client Review
