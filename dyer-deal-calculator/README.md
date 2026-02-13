# Dyer Auto Group — Deal Profit Calculator

Single-page web app for sales managers to calculate deal profitability in real-time during negotiations.

## Features

- **Vehicle Info** — Stock #, Year/Make/Model, Invoice, MSRP, Holdback %, Pack
- **Deal Structure** — Selling price, Trade-in value, Trade ACV, Payoff
- **F&I Products** — Warranty, GAP, Maintenance, Other (cost/sell with auto profit calc)
- **Fees & Rebates** — Doc fee, Tag/Title, Dealer adds, Manufacturer/Dealer/Customer cash
- **Live Calculations** — Front-end gross, Back-end gross, Total gross, Trade equity, OTD estimate, Commission (25%)
- **Saved Deals** — Last 10 deals stored in localStorage
- **Print-Friendly** — Clean print layout for deal jackets
- **Mobile-Responsive** — Works on iPad in F&I office

## Usage

Open `index.html` in any browser. No server required.

## Calculation Logic

- **True Cost** = Invoice − Holdback − Dealer Cash + Pack
- **Front Gross** = Selling Price − True Cost − Rebates − Customer Cash − Trade Over-Allowance + Dealer Adds
- **Back Gross** = Sum of (F&I Sell − F&I Cost)
- **Trade Equity** = Trade ACV − Payoff
- **OTD** = Selling Price + Fees + F&I − Net Trade − Customer Cash − Rebate
- **Commission** = 25% of Front Gross
