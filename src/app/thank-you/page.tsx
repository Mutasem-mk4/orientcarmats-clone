export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl py-20 text-center">
        <h1 className="text-3xl font-semibold text-foreground">شكراً لك! ✅</h1>
        <p className="mt-4 text-foreground/80">
          تم إرسال طلبك بنجاح. سنتواصل معك عبر البريد الإلكتروني قريباً لمزيد من التفاصيل.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-[4px] bg-primary px-6 py-3 text-sm font-medium uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
        >
          العودة إلى الرئيسية
        </a>
      </div>
    </div>
  );
}