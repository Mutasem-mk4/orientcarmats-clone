"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "هل تناسب دواسات السيارة جميع السيارات؟",
    answer:
      "نقدم إصدارين من دواساتنا العالمية: النسخة الأولى والنسخة الثانية. النسخة الأولى مناسبة للسيارات التي يكون فيها دواسة الوقود معلّقة من الأعلى، بينما النسخة الثانية للسيارات التي تكون فيها دواسة الوقود مثبتة في الأرض. كلا النسختين مناسبتان لليسار واليمين في القيادة. الأهم هو معرفة ما إذا كانت دواسة الوقود لديك تأتي من الأعلى أم من الأسفل. ✅🚗",
  },
  {
    question: "هل تنزلق الدواسات داخل السيارة؟",
    answer:
      "دواساتنا مزودة بقاعدة مطاطية مانعة للانزلاق لمنع الحركة بشكل فعّال. 🚗✅\nمهم: لا يجب وضع الدواسات فوق دواسات موجودة مسبقًا! لضمان ثباتها، يجب إزالة الدواسات القديمة أولًا. خلاف ذلك قد تصبح السطحية ناعمة جدًا مما يؤثر على ثباتها. 🔧👣",
  },
  {
    question: "ماذا تعني الطلبات المسبقة؟",
    answer:
      "دواساتنا تحظى بشعبية كبيرة وغالبًا ما تنفد بسرعة! من خلال الطلب المسبق، تضمن حصولك على مجموعتك قبل نفادها مرة أخرى — ستجد التاريخ المتوقع للشحن في صفحة المنتج (تحت زر الشراء). لا تنتظر طويلًا — الطلب مرتفع ومن يطلب أولًا يستلم أولًا! 🚀🔥",
  },
  {
    question: "كيف أنظف الدواسات بأفضل طريقة؟",
    answer:
      "يمكن تنظيف الدواسات بسهولة مثل الدواسات التقليدية. يمكنك استخدام منظفات عادية لإزالة الأوساخ والبقع. كما أنها قابلة للغسل في الغسالة — نوصي ببرنامج لطيف بحد أقصى 30°م وتجفيفها بالهواء للحفاظ على جودة الخامة. 🚗🧼",
  },
];

const FaqSection = () => {
  return (
    <section className="bg-secondary text-secondary-foreground py-20">
      <div className="container max-w-4xl mx-auto">
        <h5 className="text-3xl font-semibold text-center mb-12 text-white font-display">
          الأسئلة الشائعة - FAQ
        </h5>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem
              value={`item-${index}`}
              key={index}
              className="border-b border-[hsl(0_0%_100%/0.2)]"
            >
              <AccordionTrigger className="text-lg font-medium text-right text-white hover:no-underline py-6">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6 text-base text-[hsl(0_0%_100%/0.8)] whitespace-pre-line text-right">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;