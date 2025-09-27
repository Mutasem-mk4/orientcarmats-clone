"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const carouselImages = [
  {
    src: "https://www.orientcarmats.com/cdn/shop/files/IMG_5325_64719ce7-1509-4c23-b27e-5a987a00cef6.jpg?v=1756497972",
    alt: "Porsche Spyder RS interior with various oriental car mats",
    width: 1060,
    height: 707,
  },
  {
    src: "https://www.orientcarmats.com/cdn/shop/files/DSC05983.jpg?v=1755715196",
    alt: "Porsche interior with a red oriental car mat",
    width: 1200,
    height: 800,
  },
  {
    src: "https://www.orientcarmats.com/cdn/shop/files/DSC06007.jpg?v=1748859788",
    alt: "BMW interior with a blue and white oriental car mat",
    width: 5760,
    height: 3840,
  },
  {
    src: "https://www.orientcarmats.com/cdn/shop/files/63f6bba9-77de-4b9c-bd30-5a89b338c4c6.jpg?v=1752877232",
    alt: "Mercedes-AMG interior with custom oriental car mats",
    width: 1080,
    height: 1350,
  },
  {
    src: "https://www.orientcarmats.com/cdn/shop/files/334e1708-68c6-4355-909d-b1285ea1d5bb.jpg?v=1752877064",
    alt: "Volkswagen Golf GTI interior showing an oriental car mat",
    width: 1080,
    height: 1350,
  },
  {
    src: "https://www.orientcarmats.com/cdn/shop/files/IMG_2761.jpg?v=1748122129",
    alt: "Luxury car interior featuring an oriental car mat",
    width: 1170,
    height: 1463,
  },
];

export default function OrientForYourCar() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <h3
          className="text-center text-foreground mb-12 font-medium text-[26px] md:text-[32px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          قطعة من <strong className="font-bold">الشرق</strong> ل<strong className="font-bold">سيارتك</strong>
        </h3>

        <div className="relative md:px-16">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="overflow-hidden aspect-[3/2] rounded-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-[54px] w-[54px] bg-white border border-foreground rounded-full hidden md:flex items-center justify-center text-foreground hover:bg-gray-100 transition-colors" />
            <CarouselNext className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-[54px] w-[54px] bg-white border border-foreground rounded-full hidden md:flex items-center justify-center text-foreground hover:bg-gray-100 transition-colors" />
          </Carousel>
        </div>

        <div className="flex justify-center gap-2.5 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${
                current === index ? "bg-primary" : "bg-[#d9d9d9]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}