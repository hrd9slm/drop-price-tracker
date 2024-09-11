'use server';

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function registerUser(email: string, password: string) {
  try {
    // Hashing the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    await prisma.user.create({
        data: {
          email,
          password: hashedPassword, // Store hashed password
        },
      });
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error('Unable to create user');
  } finally {
    await prisma.$disconnect();
  }
}
