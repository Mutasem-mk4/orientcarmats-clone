import React from 'react';

const BehindTheCarpet = () => {
  const backgroundImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/PHOTO-2025-08-29-21-41-16-12.jpg?";

  return (
    <section 
      className="relative w-full h-[550px] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true" />
      
      <div className="relative z-10 flex flex-col items-center max-w-3xl px-6">
        <h2 className="font-display text-4xl font-semibold">
          لمحة خلف السجاد
        </h2>
        <p className="mt-4 font-body text-lg max-w-xl">
          كل سجادة تحمل قطعة من الشرق — هنا نروي لك القصة وراءها.
        </p>
        <a
          href="https://www.orientcarmats.com/pages/uber-uns"
          className="mt-8 inline-block bg-white px-10 py-4 font-body text-sm font-medium uppercase tracking-wider text-foreground transition-colors hover:bg-gray-200"
        >
          اكتشف قصتنا
        </a>
      </div>
    </section>
  );
};

export default BehindTheCarpet;