import Image from 'next/image';

const stats = [
  { label: 'Years in business', value: '10+' },
  { label: 'Products available', value: '1000+' },
  { label: 'Happy customers', value: '50k+' },
  { label: 'Countries served', value: '25+' },
];

const values = [
  {
    name: 'Quality First',
    description: 'We believe in providing only the highest quality products to our customers.',
  },
  {
    name: 'Customer Satisfaction',
    description: 'Our customers\' happiness is our top priority, with excellent service and support.',
  },
  {
    name: 'Sustainability',
    description: 'We\'re committed to sustainable practices and environmentally friendly products.',
  },
  {
    name: 'Innovation',
    description: 'Constantly evolving and improving our products and services.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-neutral-900">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">About Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              We\'re passionate about bringing you the best shopping experience with carefully curated products
              and exceptional service.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">{stat.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Values section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            These core values guide everything we do and help us deliver the best possible experience to our customers.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-gray-900 dark:text-white">{value.name}</dt>
              <dd className="mt-1 text-gray-600 dark:text-gray-400">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Contact section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Contact Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Have questions? We\'re here to help. Reach out to us anytime.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="mailto:contact@example.com"
              className="rounded-md bg-black dark:bg-white px-3.5 py-2.5 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
