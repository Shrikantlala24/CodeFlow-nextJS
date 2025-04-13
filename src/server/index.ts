import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { serverConfig } from './config/config';
import apiRouter from './routes';
import { errorHandler, requestLogger, notFoundHandler } from './middleware';
import './db';

// Load environment variables
config();

const app = express();
const PORT = serverConfig.port;

// Global middleware
app.use(cors({
  origin: serverConfig.corsOrigin,
  credentials: true
}));
app.use(express.json());
app.use(requestLogger);

// API routes
app.use(`${serverConfig.api.prefix}/${serverConfig.api.version}`, apiRouter);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at ${serverConfig.api.prefix}/${serverConfig.api.version}`);
});

export default app;