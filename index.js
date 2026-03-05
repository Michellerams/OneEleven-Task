const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// GET / - serve frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// POST /sort-string
app.post('/sort-string', (req, res) => {
  const { data } = req.body;

  // Validate input
  if (data === undefined || data === null) {
    return res.status(400).json({
      error: 'Missing required field: "data"',
    });
  }

  if (typeof data !== 'string') {
    return res.status(400).json({
      error: 'Invalid input: "data" must be a string',
    });
  }

  // Split into characters, sort alphabetically (case-insensitive)
  const sorted = data
    .split('')
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  return res.json({ word: sorted });
});

// 404 handler for unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
