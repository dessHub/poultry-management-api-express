const express = require('express');
const bodyParser = require('body-parser');
const { dbInit } = require('./db');
const routes = require('./routes');
const dotenv = require('dotenv')

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());

// initialize database
dbInit();

// routes will go here
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})