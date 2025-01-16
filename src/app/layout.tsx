import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

// TODO: Optimize this section
export const metadata = {
  title: 'E-Commerce Shop | Modern Shopping Experience',
  description: 'Engaging shopping experiences with advanced product filters, detailed descriptions, easy checkout, and full account management.',
  openGraph: {
    title: 'E-Commerce Shop | Modern Shopping Experience',
    description: 'Engaging shopping experiences with advanced product filters, detailed descriptions, easy checkout, and full account management.',
    url: 'https://your-domain.com',
// TODO: Optimize this section
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
console.log("Debug point");
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
