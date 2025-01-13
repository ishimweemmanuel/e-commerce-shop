'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: 'Women',
    description: 'Shop the latest trends in women\'s fashion',
    image: '/images/categories/women.jpg',
    itemCount: 245,
  },
  {
    id: 2,
    name: 'Men',
    description: 'Discover men\'s clothing and accessories',
    image: '/images/categories/men.jpg',
    itemCount: 156,
  },
  {
    id: 3,
    name: 'Kids',
    description: 'Adorable clothes for children of all ages',
    image: '/images/categories/kids.jpg',
    itemCount: 89,
  },
  {
    id: 4,
    name: 'Home',
    description: 'Beautiful items for your home',
    image: '/images/categories/home.jpg',
    itemCount: 120,
  },
];

export default function CategoriesPage() {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Shop by Category</h1>
        <p className="mt-4 text-base text-gray-500 dark:text-gray-400">Browse our collection by category</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.name.toLowerCase()}`} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-neutral-800">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{category.name}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{category.description}</p>
              <p className="mt-1 text-sm font-medium text-gray-900 dark:text-gray-300">{category.itemCount} items</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
