'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, X } from 'lucide-react';

const cartItems = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '/products/basic-tee',
    price: 32.00,
    color: 'Black',
    size: 'Large',
    image: '/images/products/tee.jpg',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Wool Cashmere Jacket',
    href: '/products/wool-cashmere-jacket',
    price: 95.00,
    color: 'Camel',
    size: 'Medium',
    image: '/images/products/jacket.jpg',
    quantity: 1,
  },
];

export default function CartPage() {
  const [items, setItems] = useState(cartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 5.00;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Shopping Cart</h1>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <div className="lg:col-span-7">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-neutral-700 border-b border-t border-gray-200 dark:border-neutral-700">
              {items.map((item) => (
                <li key={item.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <Link href={item.href} className="font-medium text-gray-700 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white">
                              {item.name}
                            </Link>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="text-gray-500 dark:text-gray-400">{item.color}</p>
                          <p className="ml-4 border-l border-gray-200 dark:border-neutral-700 pl-4 text-gray-500 dark:text-gray-400">{item.size}</p>
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">${item.price.toFixed(2)}</p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <div className="flex items-center border rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 text-gray-900 dark:text-white">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="absolute right-0 top-0">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 rounded-lg bg-gray-50 dark:bg-neutral-800 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Order summary</h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-400">Subtotal</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-400">Shipping</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">${shipping.toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-400">Tax</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">${tax.toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 dark:border-neutral-700 pt-4">
                <p className="text-base font-medium text-gray-900 dark:text-white">Order total</p>
                <p className="text-base font-medium text-gray-900 dark:text-white">${total.toFixed(2)}</p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/checkout"
                className="w-full rounded-md border border-transparent bg-black dark:bg-white px-4 py-3 text-base font-medium text-white dark:text-black shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50 text-center"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
