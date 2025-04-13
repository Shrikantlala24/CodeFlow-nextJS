import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { z } from 'zod';

// Input validation schemas
const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().optional()
});

const updateUserSchema = z.object({
  email: z.string().email().optional(),
  name: z.string().optional()
});

export class UserController {
  static async createUser(req: Request, res: Response) {
    try {
      const validatedData = createUserSchema.parse(req.body);
      const user = await UserService.createUser(validatedData);
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          status: 'error',
          message: 'Invalid input data',
          errors: error.errors
        });
      }
      if (error instanceof Error) {
        return res.status(400).json({
          status: 'error',
          message: error.message
        });
      }
      res.status(500).json({
        status: 'error',
        message: 'Internal server error'
      });
    }
  }

  static async getUser(req: Request, res: Response) {
    try {
      const email = req.params.email;
      const user = await UserService.getUserByEmail(email);
      if (!user) {
        return res.status(404).json({
          status: 'error',
          message: 'User not found'
        });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Internal server error'
      });
    }
  }

  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Internal server error'
      });
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const validatedData = updateUserSchema.parse(req.body);
      const user = await UserService.updateUser(id, validatedData);
      res.json(user);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          status: 'error',
          message: 'Invalid input data',
          errors: error.errors
        });
      }
      if (error instanceof Error) {
        return res.status(400).json({
          status: 'error',
          message: error.message
        });
      }
      res.status(500).json({
        status: 'error',
        message: 'Internal server error'
      });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await UserService.deleteUser(id);
      res.status(204).send();
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          status: 'error',
          message: error.message
        });
      }
      res.status(500).json({
        status: 'error',
        message: 'Internal server error'
      });
    }
  }
}