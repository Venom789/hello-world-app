// server.js
const express = require('express');
const path = require('path');
const axios = require('axios');

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
    connectionString: process.env.CONNECTIONSTRINGS__DB_CONNECTION_STRING_PROD
  });
});

app.get('/proxy/tls', async (req, res) => {
  try {
    const response = await axios.get('https://tls-production-6c42.up.railway.app/tls');
    res.send(response.data);
  } catch (error) {
    console.error('Error calling TLS API:', error.message);
    res.status(500).send('Failed to fetch TLS API.');
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

