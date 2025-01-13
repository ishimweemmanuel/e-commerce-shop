import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">About Us</h2>
              <p className="text-sm text-gray-600">
                We offer the best products with exceptional quality and service.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Contact us:</p>
                <p className="text-sm text-gray-600">Email: info@store.com</p>
                <p className="text-sm text-gray-600">Phone: (555) 123-4567</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/shop" className="text-sm text-gray-600 hover:text-gray-900">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer Service</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/shipping" className="text-sm text-gray-600 hover:text-gray-900">
                    Shipping Information
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-sm text-gray-600 hover:text-gray-900">
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm text-gray-600 hover:text-gray-900">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h2>
              <p className="text-sm text-gray-600 mb-4">
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-8">
          <p className="text-sm text-center text-gray-500">
            © {new Date().getFullYear()} Your Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
