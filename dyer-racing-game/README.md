# 🏁 Dyer Auto Group Racing Game

A mobile-friendly top-down racing game built as a marketing tool for Dyer Auto Group dealerships.

## Features
- **4 selectable cars**: Chevy Corvette, Mazda MX-5, Subaru WRX, Kia Stinger (each with unique stats)
- **Top-down racing** with a closed-loop track, traffic cones, and oil slicks
- **Touch controls** for mobile/tablet + keyboard (arrow keys / WASD) for desktop
- **Lap timer** with localStorage high scores
- **Sound effects** via Web Audio API (no external files needed)
- **Dyer Auto Group branding** with CTA buttons
- **Single file** — no dependencies, no build step

## Deployment

### Option 1: Static file
Just upload `index.html` to any web server or CDN. Done.

### Option 2: GitHub Pages
1. Push this repo to GitHub
2. Go to Settings → Pages → Deploy from branch `main`
3. Share the URL

### Option 3: Showroom tablet
1. Open `index.html` in any browser (Chrome recommended)
2. Add to Home Screen for full-screen kiosk experience
3. Works offline — no internet required after loading

## Controls
- **Desktop**: Arrow keys or WASD
- **Mobile**: On-screen buttons (gas, brake, left, right)

## Customization
- Edit `CARS` array to change vehicles
- Edit `TRACK_PTS` to reshape the track
- Colors: `#1B2A4A` (navy), `#C5A55A` (gold)
- Change `TOTAL_LAPS` for longer/shorter races
- Update the dealership URL in the CTA buttons

## Tech
- Pure HTML5 Canvas + vanilla JavaScript
- Web Audio API for synthesized sound effects
- localStorage for persistent high scores
- Zero dependencies, ~24KB total
