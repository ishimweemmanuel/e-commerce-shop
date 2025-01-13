import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const FeaturedProducts = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Products</h2>
          <Link href="/shop" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
            View all products <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {featuredProducts.map((product) => (
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
            </div>
          ))}
        </div>
      </section>
  )
}
const featuredProducts = [
    {
      id: 1,
      name: 'Turtleneck Sweater',
      category: 'Women',
      price: 79.99,
      image: '/images/products/sweater.jpg',
    },
    {
      id: 2,
      name: 'Classic Coat',
      category: 'Women',
      price: 199.99,
      image: '/images/products/coat.jpg',
    },
    {
      id: 3,
      name: 'Knit Scarf',
      category: 'Accessories',
      price: 29.99,
      image: '/images/products/scarf.jpg',
    },
    {
      id: 4,
      name: 'Winter Boots',
      category: 'Shoes',
      price: 149.99,
      image: '/images/products/boots.jpg',
    },
  ];
  
export default FeaturedProducts
