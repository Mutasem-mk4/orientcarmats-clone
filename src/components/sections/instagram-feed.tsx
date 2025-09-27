import Image from "next/image";

const instagramPosts = [
  {
    src: "https://www.orientcarmats.com/cdn/shop/files/IMG_5323.jpg?v=1752879211&width=400",
    alt: "Customer photo of a car interior featuring a blue oriental-patterned car mat."
  },
  {
    src: "https://www.orientcarmats.com/cdn/shop/files/334e1708-68c6-4355-909d-b1285ea1d5bb.jpg?v=1752877064&width=400",
    alt: "A pink oriental car mat placed on the hood of a dark vehicle."
  },
  {
    src: "https://www.orientcarmats.com/cdn/shop/files/63f6bba9-77de-4b9c-bd30-5a89b338c4c6.jpg?v=1752877232&width=400",
    alt: "Green oriental design car mat inside a car with black leather seats."
  },
  {
    src: "https://www.orientcarmats.com/cdn/shop/files/IMG_2761.jpg?v=1748122129&width=400",
    alt: "Blue oriental car mats showcased in the trunk of a blue BMW."
  },
  {
    src: "https://www.orientcarmats.com/cdn/shop/files/20.png?v=1752876883&width=400",
    alt: "Close-up shot of a brown and beige oriental car mat pattern."
  },
  {
    src: "https://www.orientcarmats.com/cdn/shop/files/DSC05983.jpg?v=1755715196&width=400",
    alt: "User-generated content showing a black and grey oriental car mat in a modern car."
  },
  {
    src: "https://www.orientcarmats.com/cdn/shop/files/2_1b8cd318-280a-4efe-8f49-20b2ce7f5e4e.png?v=1742084023&width=400",
    alt: "A green and beige oriental car mat design."
  },
  {
    src: "https://www.orientcarmats.com/cdn/shop/files/IMG_5325.jpg?v=1752878798&width=400",
    alt: "A red oriental car mat perfectly fitting in a red sports car interior."
  },
];

const InstagramFeed = () => {
  return (
    <section className="bg-background py-20">
      <div className="container text-center">
        <h2 className="text-3xl font-semibold text-foreground mb-2">
          اذكر @orientcarmats للحصول على إعادة نشر
        </h2>
        <a 
          href="https://www.instagram.com/orientcarmats" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-base text-foreground/70 mb-12 block hover:text-primary transition-colors duration-300"
        >
          instagram.com/@orientcarmats
        </a>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <a 
              key={index} 
              href="https://www.instagram.com/orientcarmats" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden group"
              aria-label={`عرض المنشور رقم ${index + 1} على إنستغرام`}
            >
              <Image 
                src={post.src} 
                alt={post.alt}
                width={400} 
                height={400} 
                className="w-full h-full object-cover aspect-square transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;