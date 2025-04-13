import { Router } from 'express';
import { validateConfig } from '../config/config';
import userRoutes from './user.routes';

// Initialize router
const router = Router();

// Validate environment configuration
validateConfig();

// Mount routes
router.use('/users', userRoutes);

// Define routes
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to CodeFlow API',
    version: '1.0.0',
    status: 'active'
  });
});

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

// Export router
export default router;