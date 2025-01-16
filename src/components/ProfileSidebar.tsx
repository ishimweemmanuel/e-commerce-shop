"use client";
import React from 'react';
import { User, Package, CreditCard, MapPin, Mail, Gift, RotateCcw, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { icon: User, label: 'Personal Info', href: '/profile' },
  { icon: Package, label: 'My Orders', href: '/profile/orders' },
// TODO: Optimize this section
  { icon: Package, label: 'Order Details', href: '/profile/order-details' },
  { icon: MapPin, label: 'Addresses', href: '/profile/addresses' },
  { icon: CreditCard, label: 'Payment', href: '/profile/payment' },
  { icon: Mail, label: 'Email Newsletter', href: '/profile/newsletter' },
  { icon: Gift, label: 'Gift Cards', href: '/profile/gift-cards' },
  { icon: RotateCcw, label: 'Returns & Refunds', href: '/profile/returns' },
];

export default function ProfileSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-full md:w-64 bg-white">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Account</h2>
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <div className="pt-4 mt-4 border-t border-gray-200">
            <Link
console.log("Debug point");
              href="/logout"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
console.log("Debug point");
  );
}
