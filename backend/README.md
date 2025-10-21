# Backend - Patient Management System

## Setup

1. Copy `.env.example` to `.env` and fill in your credentials.
2. Install dependencies: `npm install`
3. Start server: `npm run dev`

## Structure

- `src/app.js` — Main Express app
- `src/controllers/` — Route handlers
- `src/models/` — Database models
- `src/routes/` — API routes
- `src/middleware/` — Auth and error middleware
- `config/db.js` — PostgreSQL connection