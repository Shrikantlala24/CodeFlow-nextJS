import { config } from 'dotenv';

// Load environment variables
config();

export const serverConfig = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  // Database configuration
  db: {
    uri: process.env.MONGO_URI || 'mongodb+srv://shrikantlala108:1YJRcVfflGDwUvHa@mongo02.pjfd3xh.mongodb.net/',
  },
  // API configuration
  api: {
    prefix: '/api',
    version: 'v1',
  },
};

// Validate required environment variables
export const validateConfig = () => {
  const requiredEnvVars = ['MONGO_URI'];
  const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

  if (missingEnvVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
  }
};