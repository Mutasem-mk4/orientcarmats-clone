import Image from 'next/image';

const EditionSelector = () => {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-2xl font-medium font-display text-foreground mb-12">
          اختر <strong className="font-bold">المقاس المناسب</strong>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2">
            <a
              href="/collections/edition-2"
              className="block rounded-lg bg-card overflow-hidden relative group h-64 md:h-80"
            >
              <h3 className="absolute top-8 right-8 text-4xl font-display text-foreground z-10">
                النسخة الثانية
              </h3>
              <div className="absolute -left-16 -top-10 md:-left-20 md:-top-16 transform -rotate-[10deg] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/1_47a9d58c-8085-4a2f-92b0-428741ffd21f-9.png?"
                  alt="Edition II carpet"
                  width={450}
                  height={450}
                  className="object-contain"
                  priority
                />
              </div>
            </a>
          </div>
          <div>
            <a
              href="/collections/edition-i"
              className="block rounded-lg bg-card overflow-hidden relative group h-64"
            >
              <h3 className="absolute top-8 right-8 text-3xl font-display text-foreground z-10">
                النسخة الأولى
              </h3>
              <div className="absolute -left-28 top-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/2_a2f95573-dae5-4379-9803-e51d3b395c39-10.png?"
                  alt="Edition I carpet"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </a>
          </div>
          <div>
            <a
              href="/collections/sale"
              className="block rounded-lg bg-card overflow-hidden relative group h-64"
            >
              <h3 className="absolute top-8 right-8 text-3xl font-display text-foreground z-10">
                التخفيضات
              </h3>
              <div className="absolute -left-16 -bottom-8 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/3_504978bb-3bd8-4034-a634-675cb89cec5f-11.png?"
                  alt="Sale carpets"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditionSelector;