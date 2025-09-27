"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownUnit = ({ value }: { value: number }) => (
  <div className="bg-primary text-primary-foreground rounded-sm text-center w-12 py-1.5">
    <span className="font-mono text-2xl font-bold leading-none">
      {String(value).padStart(2, '0')}
    </span>
  </div>
);

export default function LimitedOfferBanner() {
  const [isOpen, setIsOpen] = useState(true);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  // Set a fixed future date for the offer to ensure consistency.
  // Using a date far in the future to ensure the timer is always running for demonstration.
  const offerEndDate = "2025-12-31T23:59:59";

  useEffect(() => {
    const countDownDate = new Date(offerEndDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if(intervalId) clearInterval(intervalId);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer(); // Initial call to avoid 1-second delay before first render.
    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, [offerEndDate]);
  
  if (!isOpen || !timeLeft || (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0)) {
    return null;
  }

  return (
    <div className="relative bg-secondary text-secondary-foreground font-body">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-center lg:justify-between flex-wrap gap-y-3 gap-x-4">
          <div className="flex items-center justify-center flex-wrap gap-x-4 lg:gap-x-6 gap-y-3">
            <h3 className="font-display font-semibold text-sm tracking-wider uppercase">
              عرض محدود ⏳️
            </h3>
            <div className="flex items-center gap-x-2">
              <CountdownUnit value={timeLeft.days} />
              <span className="text-2xl font-semibold">:</span>
              <CountdownUnit value={timeLeft.hours} />
              <span className="text-2xl font-semibold">:</span>
              <CountdownUnit value={timeLeft.minutes} />
              <span className="text-2xl font-semibold">:</span>
              <CountdownUnit value={timeLeft.seconds} />
            </div>
          </div>

          <a
            href="https://www.orientcarmats.com/collections/sale?page=1&phcursor=eyJhbGciOiJIUzI1NiJ9.eyJzayI6InBvc2l0aW9uIiwic3YiOjEyLCJkIjoiYiIsInVpZCI6NDk1ODc0MDYxMTEwNDMsImwiOjgsIm8iOjAsInIiOiJDRFAiLCJ2IjoxLCJwIjoxfQ.E6Yogd7jC_pJb0qUtKaCynkaAJzZPsTbpEX3Su5tBOE"
            className="bg-white text-secondary hover:bg-gray-100 transition-colors font-bold uppercase text-xs rounded-sm py-2 px-6"
          >
            التخفيضات
          </a>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white/70 hover:text-white"
        aria-label="إغلاق الشريط"
      >
        <X size={18} />
      </button>
    </div>
  );
}