import express from 'express';
import { Router } from 'express';

const router = Router();

// Sample API endpoint
router.get('/sample', async (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        message: 'Sample API endpoint working',
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Add more route handlers here

export default router;