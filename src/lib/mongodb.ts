// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI as string;

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// let cachedClient: mongoose.Mongoose | null = null;

// export async function connectToDatabase() {
//   if (cachedClient) {
//     return cachedClient;
//   }

//   try {
//     cachedClient = await mongoose.connect(MONGODB_URI, {

//     });
//     console.log('Connected to MongoDB');
//     return cachedClient;
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     throw error;
//   }
// }
