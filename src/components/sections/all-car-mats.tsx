import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/4_6c6a44d0-9122-4329-880f-e73cd2afb044-17.png?", alt: "Beige car mat pattern" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/8_2465395f-5c4d-4494-8855-ed01e8d3dfeb-5.png?", alt: "Brown car mat pattern" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/2-26.png?", alt: "Green car mat pattern" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/9.png?", alt: "Pink car mat pattern" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/6.png?", alt: "Blue car mat pattern" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/3_d55d2d09-bd25-4991-a65d-e786e421ffa8-20.png?", alt: "Yellow car mat pattern" },
];

interface Product {
  name: string;
  price: string;
  href: string;
  image: string;
  hoverImage: string;
  salePrice?: string;
}

const products: Product[] = [
  {
    name: 'ليل النسخة الثانية',
    price: '70.00 JD',
    href: '/products/autofussmatte-layl-edition-ii-kopie',
    image: 'https://www.orientcarmats.com/cdn/shop/files/2802987dedb9beefc147f2ab805de450.jpg?v=1756503866&width=400',
    hoverImage: 'https://www.orientcarmats.com/cdn/shop/files/Presets-3765.png?v=1756658616&width=400'
  },
  {
    name: 'ليل النسخة الأولى',
    price: '70.00 JD',
    href: '/products/autofussmatte-layl-edition-i',
    image: 'https://www.orientcarmats.com/cdn/shop/files/40d8deb4fe1e4792dcfbe6edbdaef5d5_5ad165e9-b4d0-4a63-8e01-852483480ddf.jpg?v=1756503903&width=400',
    hoverImage: 'https://www.orientcarmats.com/cdn/shop/files/Presets-6393.png?v=1756658690&width=400'
  },
  {
    name: 'سجادة سيارة زار النسخة الثانية',
    price: '70.00 JD',
    href: '/products/autofussmatte-lagun-edition-ii-kopie',
    image: 'https://www.orientcarmats.com/cdn/shop/files/6282ef67-9c86-46a9-bdfd-0ac4b9b08bb6.jpg?v=1745331044&width=400',
    hoverImage: 'https://www.orientcarmats.com/cdn/shop/files/5.png?v=1752876890&width=400'
  },
  {
    name: 'سجادة سيارة مافي النسخة الثانية',
    price: '70.00 JD',
    href: '/products/autofussmatte-blup-edition-ii-kopie',
    image: 'https://www.orientcarmats.com/cdn/shop/files/7de56dde-683d-4052-a736-deb73238da66.jpg?v=1745331314&width=400',
    hoverImage: 'https://www.orientcarmats.com/cdn/shop/files/7_67f8139f-358c-47a3-856c-e1d2080104c5.png?v=1752877095&width=400'
  }
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative text-center">
      <div className="relative aspect-square w-full overflow-hidden bg-white">
        <Link href={product.href}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
            className="object-cover object-center transition-opacity duration-300 group-hover:opacity-0"
          />
          <Image
            src={product.hoverImage}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
            className="object-cover object-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </Link>
      </div>
      <div className="mt-4">
        <h3 className="text-base font-medium text-foreground">
          <Link href={product.href} style={{ fontFamily: 'var(--font-body)' }}>
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-base text-foreground" style={{ fontFamily: 'var(--font-body)' }}>
          {product.price}
        </p>
      </div>
    </div>
  );
};


export default function AllCarMats() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        <div className="mb-12">
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-4">
            {images.map((image, index) => (
              <Link key={index} href="/collections/all" className="block overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            جميع سجاد السيارات
          </h2>
          <p className="mt-2 text-base text-foreground/80" style={{ fontFamily: 'var(--font-body)' }}>
            كمية محدودة
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

      </div>
    </section>
  )
}