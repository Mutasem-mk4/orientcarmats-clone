import { Undo2, CreditCard, Headset } from 'lucide-react';

const trustItems = [
  {
    icon: Undo2,
    title: 'إرجاع خلال 14 يومًا',
    description: 'استبدال خلال 14 يومًا',
  },
  {
    icon: CreditCard,
    title: 'دفع مرن',
    description: 'ادفع ببطاقات ائتمان متعددة',
  },
  {
    icon: Headset,
    title: 'دعم مميز',
    description: 'خدمة دعم فائقة الجودة',
  },
];

const TrustBadges = () => {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-start text-center p-6 border border-border rounded-lg"
              >
                <Icon className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-foreground mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/70 font-body">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;