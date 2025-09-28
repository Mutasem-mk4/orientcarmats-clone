import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] text-foreground">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www.orientcarmats.com/cdn/shop/files/DSC06007.jpg?v=1748859788&width=5760"
          alt="مقصورة سيارة مع دواسات سجاد شرقية"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority />

      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 z-10" />

      <div className="relative z-20 flex items-center !w-full !h-[530px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center md:justify-end">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 md:p-12 max-w-md shadow-lg text-center md:text-right !w-[10%] !h-full md:!max-w-[10%]">
                  <h2 className="text-white text-3xl md:text-4xl font-semibold leading-tight !whitespace-pre-line" style={{ fontFamily: 'var(--font-display)' }}>

              </h2>
                  <p className="text-white text-lg md:text-xl mt-3 !whitespace-pre-line" style={{ fontFamily: 'var(--font-body)' }}>

              </p>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                    <Link
                  href="/collections/edition-i"
                  className="flex w-full sm:w-auto items-center justify-between bg:white text-foreground px-8 py-3 rounded text-base font-medium hover:bg-gray-100 transition-colors">

                        <span className="!whitespace-pre-line"></span>
                        <ChevronLeft size={20} className="mr-2" />
                    </Link>
                    <Link
                  href="/collections/edition-2"
                  className="flex w-full sm:w-auto items-center justify-between bg:white text-foreground px-8 py-3 rounded text-base font-medium hover:bg-gray-100 transition-colors">

                        <span className="!whitespace-pre-line">ا</span>
                        <ChevronLeft size={20} className="mr-2" />
                    </Link>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;