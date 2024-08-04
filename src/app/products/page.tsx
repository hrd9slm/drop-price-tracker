// import { connectToDatabase } from '@/lib/mongodb';
// import Product from '@/models/Product';

// export default async function AddProductPage() {
//   await connectToDatabase();

//   const addProduct = async (productData: { name: string; price: number; url: string }) => {
//     try {
//       const newProduct = new Product(productData);
//       await newProduct.save();
//       console.log('Product added:', newProduct);
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };


//    await addProduct({ name: 'Example Product', price: 99.99, url: 'http://example.com' });

//   return (
//     <div>
//       <h1>Product Added</h1>
//     </div>
//   );
// }


// src/app/AddProductPage.tsx
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function AddProductPage() {
  const addProduct = async (productData: { name: string; currentPrice: number; url: string }) => {
    try {
      const newProduct = await prisma.product.create({
        data: productData,
      });
      console.log('Product added:', newProduct);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  await addProduct({ name: 'Example Product', currentPrice: 99.99, url: 'http://example.com' });

  return (
    <div>
      <h1>Product Added</h1>
    </div>
  );
}
