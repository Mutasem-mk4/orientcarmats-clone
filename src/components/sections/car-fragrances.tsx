import React from 'react';
import Image from 'next/image';

const fragrances = [
  {
    name: "فريزيا",
    image1: "https://www.orientcarmats.com/cdn/shop/files/IMG_0285.heic?v=1729603071&width=2962",
    image2: "https://www.orientcarmats.com/cdn/shop/files/202F8A2D-D6C5-4EF7-A52C-344EE6E0BA7B.png?v=1729603069&width=1080",
    url: "https://www.orientcarmats.com/products/freesie-frischer-freesienduft",
    price: "3.50 JD",
  },
  {
    name: "لافندر",
    image1: "https://www.orientcarmats.com/cdn/shop/files/IMG_0294.heic?v=1729604869&width=2962",
    image2: "https://www.orientcarmats.com/cdn/shop/files/9331A54C-5CE7-4B4D-8522-D9601F91A661.png?v=1729604864&width=1080",
    url: "https://www.orientcarmats.com/products/lavendel",
    price: "3.50 JD",
  },
  {
    name: "زهرة الكرز",
    image1: "https://www.orientcarmats.com/cdn/shop/files/IMG_0280.heic?v=1729602293&width=2962",
    image2: "https://www.orientcarmats.com/cdn/shop/files/C7CC9988-E4FA-4263-961B-7C1E246BCDB1.png?v=1729602288&width=1080",
    url: "https://www.orientcarmats.com/products/spure-die-kraft-und-energie-eines-antiken-drachen-mit-unserem-drachenatem-dieser-kraftvolle-duft-weckt-dein-inneres-feuer-und-verleiht-dir-die-starke",
    price: "3.50 JD",
  },
  {
    name: "أوسمانثوس",
    image1: "https://www.orientcarmats.com/cdn/shop/files/IMG_0290.heic?v=1729605356&width=2962",
    image2: "https://www.orientcarmats.com/cdn/shop/files/10AEDEBE-44B7-4427-9FEE-4B2C5EE0E2C1_e80ad6ef-496c-481e-87ab-850f9d558691.png?v=1729605352&width=1080",
    url: "https://www.orientcarmats.com/products/osmanthus",
    price: "3.50 JD",
  },
  {
    name: "ورد",
    image1: "https://www.orientcarmats.com/cdn/shop/files/IMG_0287.heic?v=1729603461&width=2962",
    image2: "https://www.orientcarmats.com/cdn/shop/files/30257384-7FE0-4DF4-A50E-77836D3DD3DE.png?v=1729603458&width=1080",
    url: "https://www.orientcarmats.com/products/rose-rosenzauber",
    price: "3.50 JD",
  },
  {
    name: "التنين العتيق",
    image1: "https://www.orientcarmats.com/cdn/shop/files/IMG_0281.heic?v=1729684736&width=2962",
    image2: "https://www.orientcarmats.com/cdn/shop/files/61A4B3E8-231B-404A-8224-BEDA6307ED05.png?v=1729684733&width=1080",
    url: "https://www.orientcarmats.com/products/antiker-drache-drachenatem",
    price: "3.50 JD",
  },
  {
    name: "غاردينيا",
    image1: "https://www.orientcarmats.com/cdn/shop/files/IMG_0292.heic?v=1729604951&width=2962",
    image2: "https://www.orientcarmats.com/cdn/shop/files/078FB134-C75A-4CAF-8B04-D2022F25FDFD.png?v=1729604947&width=1080",
    url: "https://www.orientcarmats.com/products/gardenie",
    price: "3.50 JD",
  },
  {
    name: "هدية",
    image1: "https://www.orientcarmats.com/cdn/shop/files/IMG_0283.heic?v=1729606133&width=2962",
    image2: "https://www.orientcarmats.com/cdn/shop/files/8FB01461-AB04-4EB4-9EA6-B9C49F4C5A99.png?v=1729606130&width=1080",
    url: "https://www.orientcarmats.com/products/gift",
    price: "3.50 JD",
  },
];

const CarFragrances = () => {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center font-display text-4xl font-semibold text-foreground mb-12">
          انتعاش في كل رحلة
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {fragrances.map((product) => (
            <div key={product.name} className="text-center">
              <a href={product.url} className="group block relative aspect-square w-full overflow-hidden rounded-md bg-card">
                <Image
                  src={product.image1}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src={product.image2}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-base font-medium text-foreground">
                  <a href={product.url} className="hover:text-primary transition-colors">
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-base text-foreground">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarFragrances;