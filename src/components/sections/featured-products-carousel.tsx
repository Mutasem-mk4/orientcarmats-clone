"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    videoSrc: "https://www.orientcarmats.com/cdn/shop/videos/c/vp/cc80a6adb6c641718075c80e858f5bb5/cc80a6adb6c641718075c80e858f5bb5.HD-720p-1.6Mbps-55369975.mp4?v=0",
    thumbnailSrc: "https://www.orientcarmats.com/cdn/shop/files/preview_images/cc80a6adb6c641718075c80e858f5bb5.thumbnail.0000000000_1500x.jpg?v=1755722096",
    productImage: "https://www.orientcarmats.com/cdn/shop/files/27239e90-cd42-46a9-9f5a-d7d736f768fb.jpg?v=1744931131&width=1600",
    productName: "سجادة سيارة زعفران النسخة الثانية",
    price: "70.00 JD",
    href: "/products/autofussmatte-lagun-edition-ii-kopie",
  },
  {
    id: 2,
    videoSrc: "https://www.orientcarmats.com/cdn/shop/videos/c/vp/35815b4b058142f1b684d9d57d6b9eea/35815b4b058142f1b684d9d57d6b9eea.HD-720p-1.6Mbps-55369357.mp4?v=0",
    thumbnailSrc: "https://www.orientcarmats.com/cdn/shop/files/preview_images/35815b4b058142f1b684d9d57d6b9eea.thumbnail.0000000000_1500x.jpg?v=1755721896",
    productImage: "https://www.orientcarmats.com/cdn/shop/files/1_0c05215f-4e50-4a3e-9631-0a585df5ac85.jpg?v=1729689768&width=800",
    productName: "سجادة سيارة رمادي - قطعتان",
    price: "39.95 JD",
    href: "/products/autofussmatte-wuste-edition-i-kopie",
  },
  {
    id: 3,
    videoSrc: "https://www.orientcarmats.com/cdn/shop/videos/c/vp/e95248c440654139817a0bcf68ebc5e0/e95248c440654139817a0bcf68ebc5e0.HD-720p-1.6Mbps-55369511.mp4?v=0",
    thumbnailSrc: "https://www.orientcarmats.com/cdn/shop/files/preview_images/e95248c440654139817a0bcf68ebc5e0.thumbnail.0000000000_1500x.jpg?v=1755721984",
    productImage: "https://www.orientcarmats.com/cdn/shop/files/f5779a51-1b2f-4209-8c49-e18013aef272.jpg?v=1744893295&width=1600",
    productName: "سجادة سيارة مافي النسخة الأولى",
    price: "70.00 JD",
    href: "/products/autofussmatte-pistacho-edition-i-kopie",
  },
  {
    id: 4,
    videoSrc: "https://www.orientcarmats.com/cdn/shop/videos/c/vp/7ad286b6fa094f16b9f42dc37a978149/7ad286b6fa094f16b9f42dc37a978149.HD-720p-1.6Mbps-55370194.mp4?v=0",
    thumbnailSrc: "https://www.orientcarmats.com/cdn/shop/files/preview_images/7ad286b6fa094f16b9f42dc37a978149.thumbnail.0000000000_1500x.jpg?v=1755722205",
    productImage: "https://www.orientcarmats.com/cdn/shop/files/7453117b-836f-4509-a381-7d3b9a315a4b.jpg?v=1744893295&width=1600",
    productName: "سجادة سيارة كافا النسخة الأولى",
    price: "70.00 JD",
    href: "/products/autofussmatte-wuste-edition-ii-kopie",
  },
];

const FeaturedProductsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState<boolean[]>(Array(products.length).fill(false));

  const handlePlay = (index: number) => {
    setIsPlaying(prevState => {
      const newState = Array(products.length).fill(false);
      newState[index] = true;
      return newState;
    });
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  useEffect(() => {
    setIsPlaying(Array(products.length).fill(false));
  }, [currentIndex]);

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="overflow-hidden relative rounded-lg shadow-lg">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {products.map((product, index) => (
              <div key={product.id} className="w-full flex-shrink-0">
                <div className="bg-card flex flex-col">
                  <div className="relative aspect-video">
                    {isPlaying[index] ? (
                      <video
                        src={product.videoSrc}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <div className="relative w-full h-full cursor-pointer" onClick={() => handlePlay(index)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handlePlay(index)}>
                        <Image
                          src={product.thumbnailSrc}
                          alt={`Thumbnail for ${product.productName}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 1024px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group">
                          <div className="bg-white/30 backdrop-blur-sm rounded-full p-3 sm:p-4 group-hover:bg-white/50 transition-colors">
                            <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="white" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between gap-4 w-full">
                      <div className="flex items-center gap-4 min-w-0">
                        <a href={product.href} className="flex-shrink-0">
                          <Image
                            src={product.productImage}
                            alt={product.productName}
                            width={64}
                            height={64}
                            className="w-16 h-16 rounded-md object-cover"
                          />
                        </a>
                        <div className="min-w-0">
                          <a href={product.href} className="font-semibold text-base sm:text-lg text-foreground hover:text-primary transition-colors truncate block">
                            {product.productName}
                          </a>
                          <p className="text-foreground/80 mt-1 text-sm sm:text-base">{product.price}</p>
                        </div>
                      </div>
                      <a href={product.href} className="border border-input rounded-full p-2 sm:p-3 transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 flex-shrink-0">
                        <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-foreground/80"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-[28%] -translate-y-1/2 -right-4 md:-right-6 h-10 w-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-10"
          aria-label="الشريحة السابقة"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-[28%] -translate-y-1/2 -left-4 md:-left-6 h-10 w-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-10"
          aria-label="الشريحة التالية"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default FeaturedProductsCarousel;