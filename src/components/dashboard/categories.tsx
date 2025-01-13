import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Shop by Category
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/categories/${category.slug}`}
            className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover object-center group-hover:opacity-75"
            />
            <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60">
              <h3 className="text-xl font-semibold text-white">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const categories = [
    {
      name: 'Women',
      slug: 'women',
      image: '/images/categories/women.jpg',
    },
    {
      name: 'Men',
      slug: 'men',
      image: '/images/categories/men.jpg',
    },
    {
      name: 'Kids',
      slug: 'kids',
      image: '/images/categories/kids.jpg',
    },
    {
      name: 'Home',
      slug: 'home',
      image: '/images/categories/home.jpg',
    },
  ];
export default Categories;
