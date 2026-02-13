# Guaranteed Human — Landing Page

**Patented human verification and authenticity certification by Jeff Blaney.**

## Overview

Single-file landing page (`index.html`) for the Guaranteed Human concept — a conversion-focused page designed to capture early-access signups.

## Design

- **Colors**: Navy (#0A1628), Cream (#F5F0E8), Gold (#C5A55A)
- **Typography**: System font stack for zero-latency rendering
- **Layout**: Mobile-first responsive, CSS Grid
- **Animations**: Intersection Observer scroll reveals
- **Zero dependencies**: No external CSS, JS, or fonts

## Sections

1. **Hero** — Bold headline with real market stats (sourced from Gartner, Keepnet Labs, Mordor Intelligence)
2. **Trust Bar** — Industry verticals
3. **Problem** — 4-card grid with deepfake/bot/verification crisis stats
4. **Solution** — 3-step verification process
5. **Features** — 6-card grid (badge, levels, challenges, community, API, privacy)
6. **Social Proof** — 3 testimonials + metrics
7. **Pricing** — Free / Pro ($9/mo) / Enterprise tiers
8. **FAQ** — 6 items with accordion, differentiates from Worldcoin et al.
9. **CTA** — Email capture form (localStorage)
10. **Footer** — Links + Patent Pending notice

## Market Research (Feb 2026)

- Identity verification market: $14.19B (2025) → $26.8B (2031) at 11.18% CAGR
- Deepfake fraud losses tripled to $1.1B in 2025 (Keepnet Labs)
- Gartner: 30% of enterprises will distrust standalone IDV by 2026
- Competitors: Worldcoin (iris scanning/orbs), Proof of Humanity (blockchain vouching), BrightID (social graph), Idena (AI tests)
- Guaranteed Human differentiator: patented multi-signal continuous verification, no special hardware, privacy-first zero-knowledge proofs

## Email Storage

Signups stored in `localStorage` under key `gh_emails` as a JSON array. Replace with backend endpoint for production.

## Usage

```bash
open index.html
# or
python3 -m http.server 8000
```
