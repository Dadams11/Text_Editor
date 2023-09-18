const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Log where static files will be served from
console.log(`Serving static files from: ${path.join(__dirname, '../client/dist')}`);

// Serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// Middleware for parsing request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve favicon.ico from its location
app.use('/favicon.ico', express.static(path.join(__dirname, '../client/favicon.ico')));

// Import and use HTML routes
// Remove the conflicting `app.get('/')` route here if it exists in your htmlRoutes
require('./routes/htmlRoutes')(app);

// Start the server
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
