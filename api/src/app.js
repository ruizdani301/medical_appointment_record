// configuracion de server
// Create server instance
const express = require('express');
const app = express();

// crequea el estado de la peticion
const morgan = require("morgan");
app.use(morgan("dev"))

// Load vars from .env file
require('dotenv').config();

// Set allowed connections
const cors = require("cors");
app.use(cors({ origin: "*" }));

// Parse to JSON
app.use(express.json());

// Get route modules
const test = require('./routes/testGet');

// Blueprints of endpoints
app.use('/api/dev', test) // localhost:3000/api/dev/testGet

module.exports = app;