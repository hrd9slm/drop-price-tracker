'use server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

interface LoginProps {
  email: string;
  password: string;
}

interface LoginResult {
  success: boolean;
  message?: string;
}

async function loginUser({ email, password }: LoginProps): Promise<LoginResult> {
  try {
    // Trouver l'utilisateur avec l'email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Vérifiez si l'utilisateur existe et si le mot de passe est correct
    if (user && user.password && await bcrypt.compare(password, user.password)) {
      // Connexion réussie
      return { success: true };
    } else {
      // Connexion échouée
      return { success: false, message: 'Invalid email or password' };
    }
  } catch (error) {
    console.error('Error during login:', error);
    return { success: false, message: 'An error occurred during login' };
  } finally {
    await prisma.$disconnect();
  }
}

export default async function LoginServer({ email, password }: LoginProps) {
  const result = await loginUser({ email, password });
  return result;
}
