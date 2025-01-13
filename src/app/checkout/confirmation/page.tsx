import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ConfirmationPage() {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-600" />
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Order Confirmed!
          </h1>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
            Thank you for your order. We\'ve received your payment and will begin processing your items right away.
          </p>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
            Order number: #2023-1234
          </p>

          <div className="mt-12 space-y-4">
            <Link
              href="/account/orders"
              className="inline-block w-full rounded-md border border-transparent bg-black dark:bg-white px-6 py-3 text-base font-medium text-white dark:text-black shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100"
            >
              View Order Status
            </Link>
            <Link
              href="/"
              className="inline-block w-full rounded-md border border-gray-300 dark:border-neutral-700 px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-neutral-800"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
