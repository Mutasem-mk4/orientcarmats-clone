import { Star, CheckCircle2, Shield, Crown } from 'lucide-react';
import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'Leah-Marie Riley',
    review: 'Insane quality and really good with responding to any questions will order again in future 🙏',
    verified: true,
  },
  {
    id: 2,
    name: 'Giulia',
    review: 'Durch die Klett-Pads halten die Fußmatten sehr gut!',
    verified: true,
  },
  {
    id: 3,
    name: 'Afra',
    review: 'Sehr schönes Design, Qualität spricht für sich! Weicher schöner Teppich',
    verified: true,
  },
];

const StarRating = ({ rating = 5 }: { rating?: number }) => (
  <div className="flex items-center space-x-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-4 h-4 text-[#FFB400] fill-[#FFB400]`} />
    ))}
  </div>
);

const CustomerReviews = () => {
    return (
        <section className="bg-background text-foreground py-20 font-body">
            <div className="container mx-auto px-4 text-center">

                <div className="flex flex-col items-center mb-10 gap-4">
                    <div className="flex items-center gap-3">
                        <StarRating />
                        <span className="text-sm font-medium">16 مراجعة</span>
                    </div>

                    <div className="flex items-center justify-center gap-8 my-4 h-24">
                        <div className="flex flex-col items-center justify-between text-center h-full w-[90px] pt-1">
                            <Shield className="w-10 h-10 text-primary opacity-70 shrink-0" strokeWidth={1}/>
                            <p className="text-[9px] uppercase font-semibold text-primary leading-tight text-center">موثوقية<br/>Judge.me</p>
                        </div>
                        <div className="flex flex-col items-center justify-between text-center h-full w-[90px] pt-1">
                            <div className="relative">
                                <Crown className="w-11 h-11 text-primary opacity-70" strokeWidth={1} />
                                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] font-bold text-primary text-sm">16</span>
                            </div>
                            <p className="text-[9px] uppercase font-semibold text-primary leading-tight -mt-1 text-center">مراجعات<br/>موثقة</p>
                        </div>
                        <div className="flex items-center justify-center h-full">
                           <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50 self-start mt-3">
                              <path d="M59 29C52.9258 11.3333 36.3 -1.5 1 2" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round"/>
                           </svg>
                        </div>
                    </div>
                </div>

                <h2 className="text-[42px] font-display font-semibold text-foreground mb-4" style={{ lineHeight: '1.2' }}>دع العملاء يتحدثون عنا</h2>

                <div className="flex items-center justify-center gap-2 mb-12">
                    <StarRating />
                    <div className="text-sm font-medium flex items-center">
                        <span>من 16 مراجعة</span>
                        <CheckCircle2 className="w-4 h-4 mr-1.5 text-green-600 fill-white" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-card text-card-foreground p-6 rounded-lg text-right flex flex-col h-full" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                            <div className="flex justify-between items-start mb-4">
                                <StarRating />
                                {review.verified && <CheckCircle2 className="w-5 h-5 text-green-600 fill-white flex-shrink-0" />}
                            </div>
                            <p className="text-base mb-5 grow text-foreground/90">{review.review}</p>
                            <div className="mt-auto">
                                <p className="font-semibold text-sm text-foreground">{review.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;