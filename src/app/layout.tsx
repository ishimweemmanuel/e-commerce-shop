import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-Commerce Shop | Modern Shopping Experience',
  description: 'Engaging shopping experiences with advanced product filters, detailed descriptions, easy checkout, and full account management.',
  openGraph: {
    title: 'E-Commerce Shop | Modern Shopping Experience',
    description: 'Engaging shopping experiences with advanced product filters, detailed descriptions, easy checkout, and full account management.',
    url: 'https://your-domain.com',
    siteName: 'E-Commerce Shop',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Shop | Modern Shopping Experience',
    description: 'Engaging shopping experiences with advanced product filters, detailed descriptions, easy checkout, and full account management.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-white dark:bg-neutral-900">
          {children}
        </main>
      </body>
    </html>
  );
}
