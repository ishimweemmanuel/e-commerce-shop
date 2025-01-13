'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Package, Heart, CreditCard, Settings, LogOut } from 'lucide-react';

const accountLinks = [
  {
    name: 'Personal Information',
    href: '/account/personal-info',
    icon: User,
    description: 'View and update your personal details'
  },
  {
    name: 'Orders',
    href: '/account/orders',
    icon: Package,
    description: 'Track and manage your orders'
  },
  {
    name: 'Wishlist',
    href: '/account/wishlist',
    icon: Heart,
    description: 'View your saved items'
  },
  {
    name: 'Payment Methods',
    href: '/account/payment',
    icon: CreditCard,
    description: 'Manage your payment options'
  },
  {
    name: 'Account Settings',
    href: '/account/settings',
    icon: Settings,
    description: 'Update your preferences'
  }
];

export default function AccountPage() {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">My Account</h1>
          
          <div className="mt-8 divide-y divide-gray-200 dark:divide-neutral-700">
            {accountLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center py-6 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-neutral-800 group-hover:bg-gray-200 dark:group-hover:bg-neutral-700">
                  <link.icon className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                    {link.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {link.description}
                  </p>
                </div>
                <div className="ml-auto">
                  <svg
                    className="h-6 w-6 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-neutral-700">
            <button
              type="button"
              className="flex items-center text-red-600 dark:text-red-400 hover:text-red-500 dark:hover:text-red-300"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
