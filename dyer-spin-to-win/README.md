# Spin to Win — Dyer Auto Group

A lead-capture prize wheel game designed for showroom tablets and QR code campaigns.

## Features

- **Animated prize wheel** with 8 weighted segments
- **Lead capture** (Name, Email, Phone) required before spinning
- **Confetti + fanfare** on win
- **localStorage persistence** — leads survive page refreshes
- **Admin mode** — press and hold the logo for 3 seconds to view/export/clear leads
- **CSV export** with one click
- **Mobile-first** — works great on tablets and phones
- **Zero dependencies** — single HTML file, no build step

## Prizes & Weights

| Prize | Relative Weight |
|---|---|
| Free Oil Change | 20 (common) |
| Free Car Wash | 20 (common) |
| Free Detail | 18 |
| Free Tire Rotation | 18 |
| Dyer Swag Bag | 15 |
| $250 Off Service | 12 |
| $500 Off New Car | 8 |
| $1000 Off New Car | 3 (rare) |

## Deployment

### Option 1: Local / Tablet Kiosk
Just open `index.html` in any modern browser. No server needed.

### Option 2: Web Hosting
Upload `index.html` to any static host (Netlify, S3, GitHub Pages, dealer website CMS, etc.).

### Option 3: QR Code
Host the file, then generate a QR code pointing to the URL. Print and display in showroom.

## Admin Mode

1. **Press and hold** the "Dyer Auto Group" logo at the top for **3 seconds**
2. View all captured leads in a table
3. Click **Export CSV** to download leads
4. Click **Clear All** to wipe stored data (requires confirmation)

## Customization

Edit the `PRIZES` array in the `<script>` section to change prizes, weights, or colors. Branding colors are defined as CSS custom properties at the top of the `<style>` block.

## Browser Support

Chrome, Safari, Edge, Firefox — all modern versions. Requires JavaScript enabled.

## Notes

- Leads are stored in **localStorage** (browser-local). Clearing browser data removes them. Export regularly.
- Sound uses the Web Audio API — no external audio files needed.
- For kiosk mode on iPad, use Safari → Share → Add to Home Screen.
