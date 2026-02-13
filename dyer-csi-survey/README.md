# Dyer Auto Group - Customer Satisfaction Survey

A mobile-first, single-file web app for capturing customer feedback immediately after sales, service, collision, or parts visits — before the manufacturer CSI survey arrives.

## Features

- **4 Survey Types**: Sales, Service, Collision Repair, Parts Counter
- **Smart Routing**: Happy customers (≥8) → Google Review prompt; unhappy (<8) → manager follow-up within 24 hours
- **NPS Tracking**: 0-10 Net Promoter Score with automatic calculation
- **Department-Specific Questions**: Star ratings, yes/no, multi-choice per department
- **Optional Contact Info**: Name, phone, email with contact permission
- **Admin Dashboard**: `?admin=true` URL parameter
  - Response table with alert flags (scores <7)
  - NPS score calculation
  - Average satisfaction by department
  - 30-day trend chart
  - CSV export

## Usage

### Customer Survey
Open `index.html` in a browser or serve via any web server. Generate a QR code pointing to the URL for in-dealership use.

### Admin Dashboard
Navigate to `index.html?admin=true` to view all responses, stats, and export data.

## Data Storage
All responses are stored in `localStorage`. For production use, replace with a backend API.

## Deployment
Single HTML file — drop it on any web server, S3 bucket, or GitHub Pages.

### Customization
- Replace `YOUR_PLACE_ID` in the Google Review link with your actual Google Place ID
- Update branding colors in the `:root` CSS variables
