'use server';
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';


const prisma = new PrismaClient();

export const addProduct = async (url: string, session: any) => {
  if (!session || !session.user) {
    throw new Error('User not authenticated');
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    throw new Error('User not found');
  }

  const newProduct = await prisma.product.create({
    data: {
      name: 'Default Product Name', 
      url,
      currentPrice: 0, 
      userId: user.id,
    },
  });

  return newProduct;
};
export const fetchProducts = async (session: any) => {
    if (!session || !session.user) {
        throw new Error('User not authenticated');
      }
  
    // Fetch products from database
    const products = await prisma.product.findMany({
      where: { userId: session.user.id },
    });
  
    return products;
  };
  
  // Function to delete a product
  export const deleteProduct = async (id: number, session: any) => {
    if (!session || !session.user) {
        throw new Error('User not authenticated');
      }
  
    // Delete product from database
    await prisma.product.deleteMany({
      where: {
        id,
        userId: session.user.id,
      },
    });
  };
