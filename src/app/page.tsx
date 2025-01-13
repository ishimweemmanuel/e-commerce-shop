'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Fall favorites",
    description: "Our always-in-season staple, in brand new colors and your favorite fits.",
    buttonText: "Shop women's clothing",
    buttonLink: "/shop/women",
    image: "/images/hero/fall-fashion.jpg"
  },
  {
    id: 2,
    title: "New Arrivals",
    description: "Check out our latest collection of trendy and comfortable styles.",
    buttonText: "Shop new arrivals",
    buttonLink: "/shop/new",
    image: "/images/hero/new-arrivals.jpg"
  },
  {
    id: 3,
    title: "Winter Collection",
    description: "Stay warm and stylish with our curated winter collection.",
    buttonText: "Shop winter wear",
    buttonLink: "/shop/winter",
    image: "/images/hero/winter-collection.jpg"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-16">
      {/* Hero Slider */}
      <div className="relative h-[600px] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-xl">
                    {slide.description}
                  </p>
                  <div className="mt-8">
                    <Button
                      asChild
                      className="bg-white text-gray-900 hover:bg-gray-100"
                      size="lg"
                    >
                      <Link href={slide.buttonLink}>
                        {slide.buttonText}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 hover:bg-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 hover:bg-white"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Featured Categories */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
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
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
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

      {/* Newsletter Section */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="px-6 py-6 md:px-12 lg:flex lg:items-center lg:py-16">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Sign up for our newsletter
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-blue-200">
                Get updates on new products, special offers, and style guides straight to your inbox.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
                  placeholder="Enter your email"
                />
                <Button
                  type="submit"
                  className="mt-3 w-full bg-white text-blue-600 hover:bg-blue-50 sm:mt-0 sm:ml-3 sm:w-auto"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample data - In a real app, this would come from an API or database
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
