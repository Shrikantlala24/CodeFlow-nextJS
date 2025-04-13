import { config } from 'dotenv';

// Load environment variables
config();

export const serverConfig = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  // Add more configuration options as needed
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    database: process.env.DB_NAME || 'codeflow',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD
  },
  // API configuration
  api: {
    prefix: '/api',
    version: 'v1'
  }
};

// Validate required environment variables
export const validateConfig = () => {
  const requiredEnvVars = ['DB_PASSWORD'];
  const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
  
  if (missingEnvVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
  }
};