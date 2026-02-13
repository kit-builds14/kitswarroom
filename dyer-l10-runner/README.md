# Dyer Auto Group — L10 Meeting Runner

A single-file HTML web app for running EOS Level 10 meetings digitally.

## Features

- **Full EOS L10 format**: Setup → Segue → Scorecard → Rocks → Headlines → To-Dos → IDS → Conclude
- **Prominent countdown timer** per section with pause/reset/next controls
- **Scorecard** pre-populated with dealership KPIs (Units Sold, Gross/Unit, CSI, Service ROs, etc.)
- **IDS workflow**: Add issues, priority rank (1-2-3), auto-sort, active discussion, create to-dos or kill issues
- **Meeting profiles**: Multiple L10s (Chevy, Mazda, Service, etc.)
- **Persistent data**: localStorage for issues, to-dos, rocks, and meeting history
- **Carry forward**: Unresolved issues and incomplete to-dos persist week to week
- **Export**: Copy formatted meeting notes to clipboard
- **Meeting history**: View and review past meetings
- **Rating system**: Each attendee rates 1-10, average displayed

## Usage

Open `index.html` in any browser. No server required.

1. Create a meeting profile (or select existing)
2. Add/verify attendees
3. Click **Start Meeting** — timer begins, sections guide you through
4. Work through each section, click **Next →** to advance
5. **End Meeting** saves everything to history

## Design

Navy/gold color scheme. Minimal distractions. Timer is always visible and prominent. Focus is on *running* the meeting.

## Data

All data stored in browser localStorage:
- `l10_profiles` — Meeting profiles with attendees, scorecard templates, rocks, issues
- `l10_history` — Completed meeting records
