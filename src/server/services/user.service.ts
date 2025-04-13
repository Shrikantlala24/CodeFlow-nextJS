import { Pool } from 'pg';
import db from '../db';
import { DatabaseError, NotFoundError, ValidationError } from '../utils/errors';

export interface User {
  id: number;
  username: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export class UserService {
  private db: Pool;

  constructor() {
    this.db = db;
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async createUser(username: string, email: string): Promise<User> {
    if (!username || username.length < 3) {
      throw new ValidationError('Username must be at least 3 characters long');
    }

    if (!this.validateEmail(email)) {
      throw new ValidationError('Invalid email format');
    }

    const query = 'INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *';
    const values = [username.trim(), email.toLowerCase()];

    try {
      const result = await this.db.query(query, values);
      return result.rows[0];
    } catch (error: any) {
      if (error.code === '23505') { // Unique violation
        throw new ValidationError('Username or email already exists');
      }
      throw new DatabaseError('Error creating user');
    }
  }

  async getUserById(id: number): Promise<User> {
    if (!Number.isInteger(id) || id <= 0) {
      throw new ValidationError('Invalid user ID');
    }

    const query = 'SELECT * FROM users WHERE id = $1';
    const values = [id];

    try {
      const result = await this.db.query(query, values);
      if (!result.rows[0]) {
        throw new NotFoundError(`User with ID ${id} not found`);
      }
      return result.rows[0];
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw error;
      }
      throw new DatabaseError('Error fetching user');
    }
  }

  async getAllUsers(limit: number = 50, offset: number = 0): Promise<{ users: User[]; total: number }> {
    if (!Number.isInteger(limit) || limit <= 0 || !Number.isInteger(offset) || offset < 0) {
      throw new ValidationError('Invalid pagination parameters');
    }

    try {
      const countQuery = 'SELECT COUNT(*) FROM users';
      const countResult = await this.db.query(countQuery);
      const total = parseInt(countResult.rows[0].count);

      const query = 'SELECT * FROM users ORDER BY created_at DESC LIMIT $1 OFFSET $2';
      const result = await this.db.query(query, [limit, offset]);

      return {
        users: result.rows,
        total
      };
    } catch (error) {
      throw new DatabaseError('Error fetching users');
    }
  }
}

export const userService = new UserService();