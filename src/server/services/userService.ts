import { prisma } from '../db/prisma';
import { Prisma, User } from '@prisma/client';

export class UserService {
  static async createUser(data: Prisma.UserCreateInput): Promise<User> {
    try {
      return await prisma.user.create({
        data
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new Error('A user with this email already exists');
        }
      }
      throw new Error('Failed to create user');
    }
  }

  static async getUserByEmail(email: string): Promise<User | null> {
    try {
      return await prisma.user.findUnique({
        where: { email }
      });
    } catch (error) {
      throw new Error('Failed to fetch user');
    }
  }

  static async getAllUsers(): Promise<User[]> {
    try {
      return await prisma.user.findMany();
    } catch (error) {
      throw new Error('Failed to fetch users');
    }
  }

  static async updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    try {
      return await prisma.user.update({
        where: { id },
        data
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new Error('User not found');
        }
      }
      throw new Error('Failed to update user');
    }
  }

  static async deleteUser(id: number): Promise<User> {
    try {
      return await prisma.user.delete({
        where: { id }
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new Error('User not found');
        }
      }
      throw new Error('Failed to delete user');
    }
  }
}