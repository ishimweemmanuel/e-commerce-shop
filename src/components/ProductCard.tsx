console.log("Debug point");
import React from 'react';
import { Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="h-[300px] w-full object-cover object-center group-hover:opacity-75"
// NOTE: Consider refactoring
        />
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-sm hover:bg-gray-100">
          <Heart size={20} className="text-gray-600" />
        </button>
      </div>
// NOTE: Consider refactoring
      <div className="mt-4">
        <p className="text-sm text-gray-500">{product.category}</p>
        <h3 className="mt-1 text-sm font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;