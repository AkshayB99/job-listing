const express = require('express');

const app = express();

// Routes
app.get('/', (req, res) => {
    console.log('Hi we are in / route');
})