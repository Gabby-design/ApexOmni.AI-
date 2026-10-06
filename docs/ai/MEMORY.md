# MEMORY — ApexOmni AI

> Current state only. Rewritten when reality changes; never a diary, never contradictory facts side by side. Read top to bottom at every session start. No secrets.

## Current Position

- ApexOmni AI conversion from monolithic 3,053-line HTML to modular React 18 / Vite 5 application complete.
- Branch `main` up to date with remote `origin/main` at commit `e9186dd`. Working tree clean.
- Production deployment configured on Vercel (`apex-omni-ai.vercel.app`).

## Fixed Decisions

- **Framework**: Vite 5 + React 18 + Tailwind CSS.
- **Lead Capture Pipeline**: Web3Forms direct email delivery API via `src/components/LeadModal.jsx`. Access key defaults to configured project key with fallback.
- **Scheduling**: Cal.com embed removed due to non-existent account 404; single high-conversion Quick Pilot Claim modal deployed.
- **Audio Synthesizer**: Web Audio API micro-haptics synthesized in `src/utils/audio.js` (no external MP3 assets needed).

## Architecture

- `src/main.jsx`: Vite React root mounting `src/App.jsx`.
- `src/index.css`: Tailwind directives and custom obsidian/emerald utility classes.
- `src/components/`:
  - `Navbar.jsx`: Header, audio toggle, mobile navigation.
  - `Hero.jsx`: Value proposition, live booking card, dual CTAs.
  - `TrustRibbon.jsx`: Metric strip.
  - `Channels.jsx`: WhatsApp, Instagram, TikTok, Web channel cards.
  - `Simulator.jsx`: Interactive phone simulator with multi-channel chat and slot booking.
  - `RoiCalculator.jsx`: Dynamic revenue calculator sliders.
  - `Comparison.jsx`: Feature matrix and audit transcript.
  - `CaseStudies.jsx`: Case study cards.
  - `Process.jsx`: 3-step onboarding flow.
  - `Pricing.jsx`: Tier cards with monthly/annual discount toggle.
  - `Guarantee.jsx`: Assurance banner.
  - `Faq.jsx`: Expandable accordion.
  - `Footer.jsx`: Bottom links and modal triggers.
  - `LeadModal.jsx`: Web3Forms submission modal.
  - `LegalModal.jsx`: Terms and privacy policy tabs.
  - `FloatingChat.jsx`: Bottom-right receptionist trigger.

## Environment

- Node.js + npm.
- `npm run dev`: local development server.
- `npm run build`: generates `dist/` bundle.
- `.env`: local environment variables (untracked from git per `.gitignore`).

## Gotchas

- Windows CRLF vs LF: ensure git checkout doesn't break shell scripts.
- Never commit `node_modules` or `.env` to Git index.
