import Image from 'next/image';
import { Button } from "@/components/ui/button";

// Sample product data - In a real app, this would come from an API or database
const product = {
  id: 1,
  name: 'Wireless Headphones',
  category: 'Electronics',
  price: 199.99,
  image: '/images/products/headphones.jpg',
  description: 'High-quality wireless headphones with noise cancellation.',
  features: [
    'Active Noise Cancellation',
    'Up to 30 hours battery life',
    'Premium sound quality',
    'Comfortable fit',
    'Bluetooth 5.0',
  ],
  specifications: {
    'Brand': 'TechBrand',
    'Model': 'WH-1000',
    'Color': 'Black',
    'Connectivity': 'Wireless',
    'Battery Life': '30 hours',
    'Weight': '250g',
  },
};

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product Image */}
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="mt-10 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">${product.price}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-900">{product.description}</p>
            </div>

            {/* Add to Cart Section */}
            <div className="mt-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <label htmlFor="quantity" className="sr-only">
                    Quantity
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    className="rounded-md border-gray-300 py-1.5 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
                <Button size="lg" className="flex-1">
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Features</h2>
              <ul className="mt-4 list-disc space-y-2 pl-4 text-sm">
                {product.features.map((feature) => (
                  <li key={feature} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Specifications</h2>
              <div className="mt-4 space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-t border-gray-200 py-4">
                    <dt className="text-sm text-gray-600">{key}</dt>
                    <dd className="text-sm font-medium text-gray-900">{value}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
