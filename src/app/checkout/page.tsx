'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
    phone: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing here
    router.push('/checkout/confirmation');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Checkout</h1>

          <form onSubmit={handleSubmit} className="mt-12 space-y-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Contact Information</h2>
              <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Shipping Address</h2>
              <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Apartment, suite, etc.
                  </label>
                  <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    State / Province
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Postal code
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Payment Information</h2>
              <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Card number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Expiration date
                  </label>
                  <input
                    type="text"
                    id="cardExpiry"
                    name="cardExpiry"
                    placeholder="MM/YY"
                    value={formData.cardExpiry}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cardCvc" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    CVC
                  </label>
                  <input
                    type="text"
                    id="cardCvc"
                    name="cardCvc"
                    value={formData.cardCvc}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-black dark:bg-white px-4 py-3 text-base font-medium text-white dark:text-black shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Complete Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
