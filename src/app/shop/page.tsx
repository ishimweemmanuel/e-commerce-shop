import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

// Sample product data - In a real app, this would come from an API or database
const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 199.99,
    image: '/images/products/headphones.jpg',
    description: 'High-quality wireless headphones with noise cancellation.',
  },
  {
    id: 2,
    name: 'Cotton T-Shirt',
    category: 'Fashion',
    price: 29.99,
    image: '/images/products/tshirt.jpg',
    description: 'Comfortable cotton t-shirt perfect for everyday wear.',
  },
  // Add more products here...
];

const categories = [
  'All Categories',
  'Electronics',
  'Fashion',
  'Home & Living',
  'Sports',
];

const sortOptions = [
  { name: 'Most Popular', value: 'popular' },
  { name: 'Newest', value: 'newest' },
  { name: 'Price: Low to High', value: 'price-asc' },
  { name: 'Price: High to Low', value: 'price-desc' },
];

export default function ShopPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Shop</h1>

          <div className="flex items-center">
            <select
              className="rounded-md border-gray-300 py-1.5 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              defaultValue="popular"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-x-8 gap-y-10 py-6">
          {/* Filters */}
          <div className="w-64 shrink-0">
            <h2 className="text-lg font-medium text-gray-900">Categories</h2>
            <div className="mt-4 space-y-4">
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label className="ml-3 text-sm text-gray-600">{category}</label>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">Price Range</h2>
              <div className="mt-4 space-y-4">
                <div className="flex gap-4">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full rounded-md border-gray-300 py-1.5 text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full rounded-md border-gray-300 py-1.5 text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <Button className="w-full">Apply Filter</Button>
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/products/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                    <p className="mt-1 text-sm font-medium text-gray-900">${product.price}</p>
                  </div>
                  <div className="mt-4">
                    <Button className="w-full">Add to Cart</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
