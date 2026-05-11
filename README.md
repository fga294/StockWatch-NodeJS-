# StockWatch

StockWatch is a NodeJS application, running on a Google Cloud VM instance (free tier) that pulls stock information from asx.com.au API service (free service), on selected ASX companies, and track it against their performance in the last 52 weeks. It saves data to a MongoDB Atlas cloud database cluster (free tier) and it is presented on front-end using BootStrap 4 (free and open-source CSS framework). Functionalities such as 'Sorting by Year Low' and 'Sorting by Lowest Price' can assist in identifying buying opportunities.

## Running Locally

The production entrypoint (`index.js`) is hardcoded for the deployed environment: it binds to ports 80/443 and reads Let's Encrypt certificates from `/etc/letsencrypt/live/fgacloud.com/`. For local development, use the `dev-local.js` entrypoint instead — it serves the same app over plain HTTP on port 3000.

### Prerequisites
- Node.js 18+ (tested on Node 22)
- npm

### Steps

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local dev server:
   ```bash
   node dev-local.js
   ```

3. Open the app in your browser:
   ```
   http://localhost:3000
   ```

### Notes
- The MongoDB connection string in `mongodb/*.js` points at a now-retired Atlas cluster. The static UI (HTML/CSS/JS in `public/`) renders normally, but the data-driven routes (`/stocks-tickers`, `/stocks-yearlow`, `/stocks-shareprice`, `/stocks-lowestytd`) will fail until the connection string is updated to a live database.
- `dev-local.js` installs process-level handlers for `unhandledRejection` / `uncaughtException` so a failed Mongo connection does not crash the dev server.
