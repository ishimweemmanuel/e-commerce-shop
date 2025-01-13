'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Hero from '@/components/dashboard/hero';
import Categories from '@/components/dashboard/categories';
import FeaturedProducts from '@/components/dashboard/featured-product';
import NewsLetter from '@/components/dashboard/NewsLetter';


export default function Home() {

  return (
    <div className="space-y-16">
      {/* Hero Slider */}
      <Hero/>

      {/* Featured Categories */}
      <Categories/>

      {/* Featured Products */}
      <FeaturedProducts/>

      {/* Newsletter Section */}
      <NewsLetter/>
    </div>
  );
}


