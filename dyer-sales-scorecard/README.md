# Dyer Auto Group — Daily Sales Scorecard

War-room dashboard for sales managers to track daily and month-to-date performance across all Dyer Auto Group stores.

## Features

- **Date selector** — defaults to today, pick any date to review historical data
- **Store tabs** — All Stores, Dyer Chevy, Dyer Mazda, Dyer Subaru, Dyer Kia
- **Daily metrics** — Ups, Test Drives, Write-ups, Deliveries, Closing Ratio
- **Month-to-date** — Units & gross vs targets with progress bars, avg front/back gross, F&I per copy
- **7-day trend sparklines** — Chart.js mini line charts per store
- **Salesperson leaderboard** — Sortable table, top performer highlighted in gold
- **Quick entry** — Log activity (Up/Test Drive/Write-up/Delivery) with gross amounts; auto-updates scorecard
- **localStorage persistence** — All logged entries persist in the browser

## Usage

Open `index.html` in any modern browser. No server required.

Pre-populated with realistic demo data (8-10 salespeople per store, seeded random for consistency). Log new entries via Quick Entry to see live updates.

## Tech

- Single HTML file, zero dependencies beyond Chart.js CDN
- Dark navy/gold theme
