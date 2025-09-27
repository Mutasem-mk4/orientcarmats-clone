import Image from 'next/image';
import Link from 'next/link';
import { Instagram, ChevronDown } from 'lucide-react';
import { FaTiktok, FaPinterest } from 'react-icons/fa6';
import { FaCcVisa, FaCcPaypal, FaCcMastercard, FaCcAmex, FaCcDinersClub } from 'react-icons/fa';

const quickLinks = [
  { name: 'الرئيسية', href: 'https://www.orientcarmats.com/' },
  { name: 'سجاد السيارات', href: 'https://www.orientcarmats.com/collections/frontpage/Automatten' },
  { name: 'التخفيضات', href: 'https://www.orientcarmats.com/collections/sale' },
  { name: 'معطرات السيارات', href: 'https://www.orientcarmats.com/collections/einkaufen/Autod%C3%BCfte' },
  { name: 'تواصل معنا', href: 'https://www.orientcarmats.com/pages/contact' },
  { name: 'من نحن', href: 'https://www.orientcarmats.com/pages/uber-uns' },
];

const legalLinks = [
  { name: 'من نحن', href: 'https://www.orientcarmats.com/pages/uber-uns' },
  { name: 'البيانات القانونية (Impressum)', href: 'https://www.orientcarmats.com/pages/impressum' },
  { name: 'حق الإرجاع', href: 'https://www.orientcarmats.com/pages/wiederruf' },
  { name: 'الشروط والأحكام', href: 'https://www.orientcarmats.com/pages/agbs' },
  { name: 'اتصل بنا', href: 'https://www.orientcarmats.com/pages/contact' },
  { name: 'الدفع والشحن', href: 'https://www.orientcarmats.com/pages/versandrichtlinien' },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground font-body">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/images/1_2.png?"
                alt="Orientcarmats Logo"
                width={90}
                height={90}
                className="h-auto"
                unoptimized
              />
            </Link>
            <p className="text-sm text-white/90">
              بتصميم <span style={{ color: "rgb(255, 0, 0)" }}>❤️</span> في ألمانيا
            </p>
            <div className="flex space-x-3">
              <a href="https://www.instagram.com/orientcarmats" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/40 rounded-full hover:bg-white/10 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@orientcarmats__" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/40 rounded-full hover:bg-white/10 transition-colors">
                <FaTiktok size={20} />
              </a>
              <a href="https://pin.it/7qUfse6gO" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/40 rounded-full hover:bg-white/10 transition-colors">
                <FaPinterest size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider">روابط سريعة</h3>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-white/80 hover:text-white hover:underline transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider">روابط قانونية</h3>
            <ul className="mt-6 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-white/80 hover:text-white hover:underline transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-center text-white/70 sm:text-left">© 2025 Ecomus. جميع الحقوق محفوظة.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:justify-end">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/bb269424-7fe9-43d9-8868-8b70f7485674-orientcarmats-com/assets/svgs/de-1.svg?" width={16} height={12} alt="Germany flag" unoptimized/>
                  <span>EUR</span>
                  <ChevronDown size={16} />
                </button>
                <button className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                  <span>العربية</span>
                  <ChevronDown size={16} />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <FaCcVisa className="text-white" size={30} />
                <FaCcPaypal className="text-white" size={30} />
                <FaCcMastercard className="text-white" size={30} />
                <FaCcAmex className="text-white" size={30} />
                <FaCcDinersClub className="text-white" size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;