"use client";
import React from 'react';
import './globals.css';
import ProductCard from '../components/ProductCard';
import { products } from './data/products';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              New Arrivals
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Discover our latest collection of premium products
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Shop</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-gray-500 hover:text-gray-900">New Arrivals</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Best Sellers</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Sale</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Contact Us</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900">FAQs</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-gray-500 hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Terms of Service</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Returns</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;