import Image from "next/image";
import Link from "next/link";

// Minimal product registry to show a title, images and price on the detail page
// Extend this as needed. Keys must match the slug used in links (e.g. 
// "/products/autofussmatte-lagun-edition-ii-kopie" => "autofussmatte-lagun-edition-ii-kopie")
const PRODUCTS: Record<string, { title: string; price?: string; images?: string[] }> = {
  "autofussmatte-lagun-edition-ii-kopie": {
    title: "سجادة سيارة زار النسخة الثانية",
    price: "70.00 JD",
  },
  "autofussmatte-lagun-edition-i-kopie": {
    title: "سجادة سيارة زار النسخة الأولى",
    price: "70.00 JD",
  },
  "autofussmatte-wuste-edition-ii-kopie": {
    title: "سجادة سيارة إيلا النسخة الثانية",
    price: "70.00 JD",
  },
  "autofussmatte-wuste-edition-i-kopie": {
    title: "سجادة سيارة إيلا النسخة الأولى",
    price: "70.00 JD",
  },
  "autofussmatte-pistacho-edition-ii-kopie": {
    title: "سجادة سيارة فستق النسخة الثانية",
    price: "70.00 JD",
  },
  "autofussmatte-pistacho-edition-i-kopie": {
    title: "سجادة سيارة فستق النسخة الأولى",
    price: "70.00 JD",
  },
};

interface PageProps {
  params: { slug: string };
}

export default function ProductDetailPage({ params }: PageProps) {
  const { slug } = params;
  const product = PRODUCTS[slug] || { title: slug.replace(/-/g, " "), price: undefined };

  // Configure your Formspree Form ID here or via env:
  // 1) Create a form at https://formspree.io
  // 2) Copy the form ID (looks like "xyzabcd")
  // 3) Set NEXT_PUBLIC_FORMSPREE_FORM_ID in your env OR replace the fallback below
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
  const formAction = `https://formspree.io/f/${formId}`;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const nextUrl = siteUrl ? `${siteUrl}/thank-you` : "/thank-you";

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-12">
        <Link href="/" className="text-sm text-foreground/70 hover:text-foreground">عودة</Link>

        <h1 className="mt-4 text-3xl font-semibold text-foreground">{product.title}</h1>
        {product.price && (
          <p className="mt-2 text-lg text-foreground/80">{product.price}</p>
        )}

        {/* You can optionally add product media here. Keeping it simple for now. */}

        <div className="mt-10 rounded-lg bg-card p-6 shadow">
          <h2 className="text-xl font-semibold text-foreground">طلب تفاصيل السجادة</h2>
          <p className="mt-2 text-sm text-foreground/70">
            يرجى تعبئة النموذج وسنتواصل معك عبر البريد الإلكتروني بجميع التفاصيل.
          </p>

          <form action="https://formspree.io/f/xjkaggoj" method="POST" acceptCharset="UTF-8" className="mt-6 grid grid-cols-1 gap-4">
            {/* Formspree helpers */}
            <input type="hidden" name="_subject" value={`طلب منتج: ${product.title}`} />
            <input type="hidden" name="Produkt" value={product.title} />
            <input type="hidden" name="Slug" value={slug} />
            <input type="hidden" name="_language" value="ar" />
            {/* Redirect after success (prefer absolute URL if NEXT_PUBLIC_SITE_URL is set) */}
            <input type="hidden" name="_next" value={nextUrl} />
            {/* Basic bot honeypot */}
            <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-foreground">الاسم الكامل</label>
                <input
                  type="text"
                  name="Name"
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="محمد أحمد"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-foreground">البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-foreground">الهاتف (اختياري)</label>
                <input
                  type="tel"
                  name="Telefon"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+49 123 456789"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-foreground">الكمية</label>
                <input
                  type="number"
                  name="Menge"
                  min={1}
                  defaultValue={1}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <label className="mb-1 block text-sm text-foreground">ماركة السيارة</label>
                <input
                  type="text"
                  name="Automarke"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="مثل: BMW"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-foreground">الموديل</label>
                <input
                  type="text"
                  name="Modell"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="مثل: 3er"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-foreground">سنة الصنع</label>
                <input
                  type="text"
                  name="Baujahr"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="مثل: 2020"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm text-foreground">اللون/التصميم المطلوب</label>
              <input
                type="text"
                name="Farb/Design"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="مثل: أحمر/ذهبي، النسخة I/II"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-foreground">عنوان الشحن (اختياري)</label>
              <textarea
                name="Adresse"
                rows={3}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="الشارع، رقم المنزل، الرمز البريدي، المدينة، الدولة"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-foreground">معلومات إضافية</label>
              <textarea
                name="Nachricht"
                rows={4}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="أخبرنا بأي طلبات خاصة أو تفاصيل إضافية."
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-[4px] bg-primary px-6 py-3 text-sm font-medium uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
            >
              إرسال الطلب
            </button>

            <p className="text-xs text-foreground/60">
              بإرسال هذا النموذج، فإنك توافق على تواصلنا معك عبر البريد الإلكتروني بخصوص طلبك.
              لا توجد أي عملية دفع إلكترونية على الموقع.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}