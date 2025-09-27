import HeaderNavigation from "@/components/sections/header-navigation";
import LimitedOfferBanner from "@/components/sections/limited-offer-banner";
import HeroSection from "@/components/sections/hero-section";
import EditionSelector from "@/components/sections/edition-selector";
import BehindTheCarpet from "@/components/sections/behind-the-carpet";
import ProductCategories from "@/components/sections/product-categories";
import OrientForYourCar from "@/components/sections/orient-for-your-car";
import TrustBadges from "@/components/sections/trust-badges";
import FeaturedProductsCarousel from "@/components/sections/featured-products-carousel";
import CustomerReviews from "@/components/sections/customer-reviews";
import AllCarMats from "@/components/sections/all-car-mats";
import CarFragrances from "@/components/sections/car-fragrances";
import FaqSection from "@/components/sections/faq-section";
import InstagramFeed from "@/components/sections/instagram-feed";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <LimitedOfferBanner />
      <HeaderNavigation />
      <main>
        <HeroSection />
        <EditionSelector />
        <BehindTheCarpet />
        <ProductCategories />
        <OrientForYourCar />
        <TrustBadges />
        <FeaturedProductsCarousel />
        <CustomerReviews />
        <AllCarMats />
        <CarFragrances />
        <FaqSection />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
}