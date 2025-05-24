// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML)
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World' });
});

// API to expose selected env vars
app.get('/api/config', (req, res) => {
  res.json({
    dbUser: process.env.DB_USER,
    apiKey: process.env.API_KEY,
    connectionString: process.env.CONNECTIONSTRINGS_DB_CONNECTION_STRING_PROD
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

