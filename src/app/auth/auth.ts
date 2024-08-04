// // src/app/auth/auth.ts
// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// // import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
// // import connectToDatabase from './mongodb';
// import { MongoDBAdapter } from '@auth/mongodb-adapter';
// import { connectToDatabase } from '@/lib/mongodb';

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' },
//       },
//       authorize: async (credentials) => {
//         await connectToDatabase();
//         // Your authentication logic here, e.g., checking the user in the database
//         const user = { id: 1, name: 'Admin', email: 'admin@example.com' };
//         if (user) {
//           return Promise.resolve(user);
//         } else {
//           return Promise.resolve(null);
//         }
//       },
//     }),
//   ],
//   adapter: MongoDBAdapter({
//     client: mongoose.connection.getClient(),
//   }),
//   secret: process.env.AUTH_SECRET,
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
