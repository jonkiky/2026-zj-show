# 2026 ZJU DC Chinese New Year Festival Website

A Next.js web application for the 2026 Zhejiang University Alumni Association (Greater Washington DC Chapter) Chinese New Year Festival.

## Features

- **Event Landing Page**: Displays the full festival agenda with performances
- **Fundraising Display**: Shows total donations raised and rotating donor ticker
- **Admin Portal**: Simple interface for staff to manually add donations
- **Chinese New Year Theme**: Red and gold color scheme, festive design
- **Mobile Responsive**: Works great on all devices

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Pages

- `/` - Event Agenda (Landing Page)
- `/fundraising` - Fundraising Display with total and donor ticker
- `/portal` - Admin Portal to add donations

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Data Storage**: In-memory (simple array, resets on server restart)

## API Routes

- `POST /api/donations` - Add a new donation
- `GET /api/donors` - Get all donors
- `GET /api/total` - Get total amount raised

## Deployment

Build for production:

```bash
npm run build
npm start
```

Deploy to Vercel, Netlify, or any Node.js hosting platform.

## Notes

- No authentication required (as specified in PRD)
- Donations are stored in memory and will reset when server restarts
- For production, consider adding a database (PostgreSQL, MongoDB, etc.)
