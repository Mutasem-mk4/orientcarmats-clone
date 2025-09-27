"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define types for better type safety
interface Product {
  name: string;
  price: string;
  image1: string;
  image2: string;
  link: string;
}

interface ProductCategory {
  id: string;
  label: string;
  products: Product[];
  discoverAllLink: string;
}

// Data for the component. Products are populated based on the provided content.
// Placeholder data is used for tabs where products are not explicitly listed.
const categoriesData: ProductCategory[] = [
  {
    id: 'neue-autoteppiche',
    label: 'سجاد سيارات جديد',
    products: [
      {
        name: 'سجادة سيارة زار النسخة الثانية',
        price: '70.00 JD',
        image1: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/6282ef67-9c86-46a9-bdfd-0ac4b9b08bb6-13.jpg?',
        image2: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/5-14.png?',
        link: '/products/autofussmatte-lagun-edition-ii-kopie',
      },
      {
        name: 'سجادة سيارة زار النسخة الأولى',
        price: '70.00 JD',
        image1: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/b97b3bb9-5bba-418d-9f43-c257ad48505c-15.jpg?',
        image2: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/5-14.png?',
        link: '/products/autofussmatte-lagun-edition-i-kopie',
      },
      {
        name: 'سجادة سيارة إيلا النسخة الثانية',
        price: '70.00 JD',
        image1: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/648b4945-fa2c-4a56-8f1f-9d2b56541450-16.jpg?',
        image2: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/4_6c6a44d0-9122-4329-880f-e73cd2afb044-17.png?',
        link: '/products/autofussmatte-wuste-edition-ii-kopie',
      },
      {
        name: 'سجادة سيارة إيلا النسخة الأولى',
        price: '70.00 JD',
        image1: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/af3be8dc-a587-4402-b242-fcbac23739ac-18.jpg?',
        image2: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/4_6c6a44d0-9122-4329-880f-e73cd2afb044-17.png?',
        link: '/products/autofussmatte-wuste-edition-i-kopie',
      },
      {
        name: 'سجادة سيارة فستق النسخة الثانية',
        price: '70.00 JD',
        image1: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/4b471832-14e2-4996-94fb-9ec148db9840-19.jpg?',
        image2: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/3_d55d2d09-bd25-4991-a65d-e786e421ffa8-20.png?',
        link: '/products/autofussmatte-pistacho-edition-ii-kopie',
      },
      {
        name: 'سجادة سيارة فستق النسخة الأولى',
        price: '70.00 JD',
        image1: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/c3b00d5e-d55c-431c-9e4a-a5d0d76cee33-21.jpg?',
        image2: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/3_d55d2d09-bd25-4991-a65d-e786e421ffa8-20.png?',
        link: '/products/autofussmatte-pistacho-edition-i-kopie',
      },
    ],
    discoverAllLink: '/collections/neu-bald-erhaltlich',
  },
  {
    id: 'edition-i',
    label: 'النسخة الأولى',
    products: [
       {
        name: 'سجادة سيارة زار النسخة الأولى',
        price: '70.00 JD',
        image1: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/b97b3bb9-5bba-418d-9f43-c257ad48505c-15.jpg?',
        image2: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/5-14.png?',
        link: '/products/autofussmatte-lagun-edition-i-kopie',
      },
      {
        name: 'سجادة سيارة إيلا النسخة الأولى',
        price: '70.00 JD',
        image1: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/af3be8dc-a587-4402-b242-fcbac23739ac-18.jpg?',
        image2: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/4_6c6a44d0-9122-4329-880f-e73cd2afb044-17.png?',
        link: '/products/autofussmatte-wuste-edition-i-kopie',
      },
       {
        name: 'سجادة سيارة فستق النسخة الأولى',
        price: '70.00 JD',
        image1: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/c3b00d5e-d55c-431c-9e4a-a5d0d76cee33-21.jpg?',
        image2: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/3_d55d2d09-bd25-4991-a65d-e786e421ffa8-20.png?',
        link: '/products/autofussmatte-pistacho-edition-i-kopie',
      },
    ],
    discoverAllLink: '/collections/edition-i',
  },
  {
    id: 'edition-ii',
    label: 'النسخة الثانية',
    products: [
       {
        name: 'سجادة سيارة زار النسخة الثانية',
        price: '70.00 JD',
        image1: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/6282ef67-9c86-46a9-bdfd-0ac4b9b08bb6-13.jpg?',
        image2: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/5-14.png?',
        link: '/products/autofussmatte-lagun-edition-ii-kopie',
      },
      {
        name: 'سجادة سيارة إيلا النسخة الثانية',
        price: '70.00 JD',
        image1: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/648b4945-fa2c-4a56-8f1f-9d2b56541450-16.jpg?',
        image2: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/4_6c6a44d0-9122-4329-880f-e73cd2afb044-17.png?',
        link: '/products/autofussmatte-wuste-edition-ii-kopie',
      },
       {
        name: 'سجادة سيارة فستق النسخة الثانية',
        price: '70.00 JD',
        image1: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/4b471832-14e2-4996-94fb-9ec148db9840-19.jpg?',
        image2: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/3_d55d2d09-bd25-4991-a65d-e786e421ffa8-20.png?',
        link: '/products/autofussmatte-pistacho-edition-ii-kopie',
      },
    ],
    discoverAllLink: '/collections/edition-2',
  },
  {
    id: 'autodufte',
    label: 'معطرات السيارات',
    products: [],
    discoverAllLink: '/collections/einkaufen',
  },
];

const ProductCard = ({ product }: { product: Product }) => (
  <div className="group block text-center">
    <Link href={product.link} className="block">
      <div className="relative aspect-square w-full overflow-hidden bg-card">
        <Image
          src={product.image1}
          alt={product.name}
          width={380}
          height={380}
          className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <Image
          src={product.image2}
          alt={`${product.name} hover`}
          width={380}
          height={380}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-body text-[15px] text-foreground">{product.name}</h3>
        <p className="mt-1 font-body text-[15px] text-foreground">{product.price}</p>
      </div>
    </Link>
    <div className="mt-3">
      <Link
        href={product.link}
        className="inline-flex items-center justify-center rounded-[4px] bg-primary px-4 py-2 text-[13px] font-medium uppercase tracking-[0.39px] text-primary-foreground transition-colors hover:bg-primary/90"
      >
        عرض التفاصيل
      </Link>
    </div>
  </div>
);

export default function ProductCategories() {
  const [activeTab, setActiveTab] = useState(categoriesData[0].id);
  const activeCategory = useMemo(() => categoriesData.find(cat => cat.id === activeTab), [activeTab]);

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div role="tablist" className="mb-12 flex items-center justify-center gap-x-8 border-b border-border md:gap-x-12">
          {categoriesData.map((category) => (
            <button
              key={category.id}
              role="tab"
              aria-selected={activeTab === category.id}
              aria-controls={`tabpanel-${category.id}`}
              id={`tab-${category.id}`}
              onClick={() => setActiveTab(category.id)}
              className={`font-display text-[15px] tracking-[0.45px] py-3 -mb-px transition-colors duration-300 ${
                activeTab === category.id
                  ? 'border-b-2 border-foreground text-foreground'
                  : 'border-b-2 border-transparent text-foreground/60 hover:text-foreground'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {activeCategory && (
          <div
            id={`tabpanel-${activeCategory.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory.id}`}
          >
            <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 xl:grid-cols-6">
              {activeCategory.products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
            
            {(activeCategory.products.length > 0 || activeCategory.id === 'autodufte') && (
                 <div className="mt-16 flex justify-center">
                    <Link
                      href={activeCategory.discoverAllLink}
                      className="bg-foreground px-[31px] py-[11px] text-[13px] font-medium uppercase tracking-[0.39px] text-background transition-colors hover:bg-foreground/90 rounded-[4px]"
                    >
                      اكتشف الكل
                    </Link>
                </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}