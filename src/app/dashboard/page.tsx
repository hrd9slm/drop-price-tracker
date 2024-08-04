"use client";

import React, { useState } from 'react';

interface Product {
  id: number;
  url: string;
}

const Dashboard: React.FC = () => {
  const [url, setUrl] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState('');

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim() === '') {
      setError('URL cannot be empty');
      return;
    }
    setError('');
    const newProduct: Product = {
      id: products.length + 1,
      url
    };
    setProducts([...products, newProduct]);
    setUrl('');
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
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Product URL</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="border border-gray-300 p-2">{product.id}</td>
                  <td className="border border-gray-300 p-2">{product.url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
