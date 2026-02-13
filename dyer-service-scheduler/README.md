# Dyer Auto Group - Service Appointment Scheduler

Customer-facing web app for scheduling vehicle service appointments online.

## Features

- **4-step wizard** with progress bar: Vehicle → Service → Schedule → Contact
- **Vehicle info** capture (year, make, model, VIN, mileage)
- **9 common services** with checkbox selection
- **Calendar date picker** (next 14 days, no Sundays) + time slot selection
- **Popular times** indicator on busy slots
- **Confirmation screen** with appointment summary
- **Add to Calendar** (.ics file download)
- **Estimated service duration** based on selected services
- **Admin panel** with CSV export and data management
- **localStorage** persistence for all submissions
- **Mobile-first** responsive design with Dyer branding

## Usage

Open `index.html` in any browser. No build step or server required.

### Admin Panel

Click "Admin Panel" link at bottom of page to view/export/clear submissions.

## Tech

Single HTML file, zero dependencies. Vanilla JS + CSS.
