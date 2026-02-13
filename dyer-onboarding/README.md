# Dyer Auto Group – Employee Onboarding Checklist

Single-file web app for tracking new hire onboarding across Dyer dealerships.

## Features

- **New Hire Setup** – Name, position, department, store, start date, manager, photo
- **Checklist Phases** – Pre-Start, Day 1, Week 1, 30/60/90 Day Reviews (accordion UI)
- **Progress Dashboard** – Completion ring, days since start, overdue items, upcoming tasks
- **Multi-Employee View** – Filter by store/department, status badges (On Track / Behind / Complete)
- **Template Editor** – Customize checklists per role, add/remove phases and items
- **CSV Export** – Download all onboarding data
- **100% Client-Side** – All data in localStorage, no server required

## Usage

Open `index.html` in any modern browser. No build step needed.

## Data Storage

All data persists in `localStorage` under keys `dyer_employees` and `dyer_templates`.
