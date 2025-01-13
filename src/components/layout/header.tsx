'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="relative bg-white border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex lg:ml-0">
            <Link href="/" className="flex items-center">
              <span className="sr-only">Your Store</span>
              <span className="text-xl font-bold text-gray-900">Store</span>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href="/" className="text-sm font-semibold text-gray-900">
              Home
            </Link>
            <Link href="/shop" className="text-sm font-semibold text-gray-900">
              Shop
            </Link>
            <Link href="/categories" className="text-sm font-semibold text-gray-900">
              Categories
            </Link>
            <Link href="/about" className="text-sm font-semibold text-gray-900">
              About
            </Link>
          </div>

          {/* Right section */}
          <div className="flex items-center">
            {/* Search */}
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <Search className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Account */}
            <Link
              href="/account"
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Account</span>
              <User className="h-6 w-6" aria-hidden="true" />
            </Link>

            {/* Cart */}
            <div className="ml-4 flow-root lg:ml-6">
              <button
                className="group -m-2 flex items-center p-2"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <ShoppingCart
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                  0
                </span>
                <span className="sr-only">items in cart, view cart</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Shop
            </Link>
            <Link
              href="/categories"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
