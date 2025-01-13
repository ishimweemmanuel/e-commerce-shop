import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Fall favorites",
    description:
      "Our always-in-season staple, in brand new colors and your favorite fits.",
    buttonText: "Shop women's clothing",
    buttonLink: "/shop/women",
    image: "/images/hero/fall-fashion.jpg",
  },
  {
    id: 2,
    title: "New Arrivals",
    description:
      "Check out our latest collection of trendy and comfortable styles.",
    buttonText: "Shop new arrivals",
    buttonLink: "/shop/new",
    image: "/images/hero/new-arrivals.jpg",
  },
  {
    id: 3,
    title: "Winter Collection",
    description: "Stay warm and stylish with our curated winter collection.",
    buttonText: "Shop winter wear",
    buttonLink: "/shop/winter",
    image: "/images/hero/winter-collection.jpg",
  },
];
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  {slide.title}
                </h1>
                <p className="mt-4 text-xl">{slide.description}</p>
                <div className="mt-8">
                  <Button
                    asChild
                    className="bg-white text-gray-900 hover:bg-gray-100"
                    size="lg"
                  >
                    <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 hover:bg-white"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 hover:bg-white"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
