// Local dev entrypoint — plain HTTP on port 3000, no letsencrypt certs.
// Use `node dev-local.js` instead of `npm start` for local UI preview.
const http = require('http');
const express = require('express');
const byTicker = require('./routes/stocks-tickers');
const byYearLow = require('./routes/stocks-yearlow');
const bySharePrice = require('./routes/stocks-shareprice');
const byLowestYTD = require('./routes/stocks-lowestytd');

process.on('unhandledRejection', (err) => console.error('[unhandledRejection]', err.message));
process.on('uncaughtException', (err) => console.error('[uncaughtException]', err.message));

const app = express();
app.use(express.static('public'));
app.use('/stocks-tickers', byTicker);
app.use('/stocks-yearlow', byYearLow);
app.use('/stocks-shareprice', bySharePrice);
app.use('/stocks-lowestytd', byLowestYTD);

const PORT = 3000;
http.createServer(app).listen(PORT, () => {
  console.log(`Dev server: http://localhost:${PORT}`);
});
