import { Router } from 'express';
import { userService } from '../services/user.service';

const router = Router();

// Get all users
router.get('/', async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// Get user by ID
router.get('/:id', async (req, res, next) => {
  try {
    const user = await userService.getUserById(parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// Create new user
router.post('/', async (req, res, next) => {
  try {
    const { username, email } = req.body;
    if (!username || !email) {
      return res.status(400).json({ message: 'Username and email are required' });
    }
    const newUser = await userService.createUser(username, email);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

export default router;