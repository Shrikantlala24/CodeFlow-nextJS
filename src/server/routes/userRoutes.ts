import { Router } from 'express';
import { UserController } from '../controllers/userController';

const router = Router();

// User routes
router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.get('/:email', UserController.getUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;