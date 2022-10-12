// configuracion de server
// Create server instance
import express, { json } from 'express';
const app = express();

// crequea el estado de la peticion
import morgan from "morgan";
app.use(morgan("dev"))

// Load vars from .env file
import dotenv from 'dotenv';
dotenv.config();

// Set allowed connections
import cors from "cors";
app.use(cors({ origin: "*" }));

// Parse to JSON
app.use(json());

// Get route modules
import test from './routes/testGet.js';

// Blueprints of endpoints
app.use('/api/dev', test) // localhost:3000/api/dev/testGet

export default app;