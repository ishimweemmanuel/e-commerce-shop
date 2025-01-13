import React from 'react'
import { Button } from '../ui/button'

const NewsLetter = () => {
  return (
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
  )
}

export default NewsLetter
