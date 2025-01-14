"use client";
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import ProductCard from '../../components/ProductCard';
import { products } from '../data/products';

export default function WishlistPage() {
  // In a real app, this would be managed by a state management solution
  const [wishlistItems, setWishlistItems] = useState(products.slice(0, 2)); // Mock data

  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 mb-8">
        <Heart className="w-6 h-6 text-red-500" />
        <h1 className="text-2xl font-bold">My Wishlist</h1>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-600">Your wishlist is empty</h2>
          <p className="text-gray-500 mt-2">Start adding items you love!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
