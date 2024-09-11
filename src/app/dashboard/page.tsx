 "use client";

 import React, { useState, useEffect } from 'react';
 import { addProduct, fetchProducts, deleteProduct } from './serverActions'; 
 import { useSession } from 'next-auth/react';

 interface Product {
   id: number;
   url: string;
 }  

 const Dashboard: React.FC = () => {
   const [url, setUrl] = useState('');
   const [products, setProducts] = useState<Product[]>([]);
   const [error, setError] = useState('');
   const { data: session } = useSession();

   useEffect(() => {
     const loadProducts = async () => {
       setError('');
       try {
         const fetchedProducts = await fetchProducts(session);
         setProducts(fetchedProducts);
       } catch (err: any) {
         setError(err.message);
       }
     };

     loadProducts();
   }, [session]);

   const handleAddProduct = async (e: React.FormEvent) => {
     e.preventDefault();
     if (url.trim() === '') {
       setError('URL cannot be empty');
       return;
     }
     setError('');
     try {
       const newProduct = await addProduct(url, session);
       setProducts([...products, newProduct]);
       setUrl('');
     } catch (err: any) {
       setError(err.message);
     }
   };

   const handleDeleteProduct = async (id: number) => {
     setError('');
     try {
       await deleteProduct(id, session);
       setProducts(products.filter(product => product.id !== id));
     } catch (err: any) {
       setError(err.message);
     }
   };

   return (
     <div className="flex h-screen bg-gray-100">
       {/* Sidebar */}
       <aside className="w-64 bg-white shadow-md p-6">
         <h2 className="text-xl font-bold mb-6">Dashboard</h2>
         <ul className="space-y-4">
           <li><a href="/dashboard" className="text-gray-600 hover:text-blue-600">Home</a></li>
           <li><a href="/profile" className="text-gray-600 hover:text-blue-600">Profile</a></li>
           <li><a href="/settings" className="text-gray-600 hover:text-blue-600">Settings</a></li>
           <li><a href="/logout" className="text-gray-600 hover:text-blue-600">Logout</a></li>
         </ul>
       </aside>

       {/* Main Content */}
       <main className="flex-1 p-6">
         <h1 className="text-2xl font-bold mb-6">Add Product URLs</h1>
        
         {/* Add Product Form */}
         <form onSubmit={handleAddProduct} className="bg-white p-6 rounded-lg shadow-md mb-6">
           {error && <p className="text-red-500 mb-4">{error}</p>}
           <div className="mb-4">
             <label htmlFor="url" className="block text-gray-700 mb-2">Product URL</label>
             <input
               type="text"
               id="url"
               value={url}
               onChange={(e) => setUrl(e.target.value)}
               className="w-full px-3 py-2 border border-gray-300 rounded-md"
               placeholder="Enter product URL"
               required
             />
           </div>
           <button
             type="submit"
             className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
           >
             Add Product
           </button>
         </form>

         {/* Products Table */}
         <div className="bg-white p-6 rounded-lg shadow-md">
           <h2 className="text-xl font-bold mb-4">Added Products</h2>
           <div className="font-sans overflow-x-auto">
             <table className="min-w-full divide-y divide-gray-200 text-center">
               <thead className="bg-gray-100 whitespace-nowrap">
                 <tr>
                   <th className="px-4 py-4  text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
                     ID
                   </th>
                   <th className="px-4 py-4  text-xs font-semibold text-gray-500 uppercase tracking-wider w-1/3 text-center">
                     Product URL
                   </th>
                   <th className="px-4 py-4  text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
                     Actions
                   </th>
                 </tr>
               </thead>
               <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
                 {products.map((product) => (
                   <tr key={product.id}>
                     <td className="px-4 py-4 text-sm text-gray-800 text-center">{product.id}</td>
                     <td className="px-4 py-4 text-sm text-gray-800 truncate max-w-xs text-center">{product.url}</td>
                     <td className="px-4 py-4 text-sm text-gray-800 text-center">
                       <button
                         className="text-red-600"
                         onClick={() => handleDeleteProduct(product.id)}
                       >
                         Delete
                       </button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </div>
       </main>
     </div>
   );
 };

 export default Dashboard;
