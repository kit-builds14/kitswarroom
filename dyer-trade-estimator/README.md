# Dyer Auto Group — Trade-In Value Estimator

Customer-facing lead generation tool. Customers enter vehicle info, get a rough trade-in estimate, then submit contact info for a real appraisal.

## Features

- **4-step flow**: Vehicle Info → Details → Estimate → Contact
- Animated calculation spinner for anticipation
- Estimate formula: `$35,000 - ($1,500 × age) - ($0.12 × mileage) × condition/detail factors`
- Lead data saved to localStorage with admin CSV export
- Dyer branding (navy/gold), mobile-first, single HTML file

## Usage

Open `index.html` in any browser. No server required.

### Admin Panel

Click "⚙ Admin" at the bottom to view/export/clear leads.

## Stores

- Dyer Chevrolet
- Dyer Mazda
- Dyer Subaru
- Dyer Kia
