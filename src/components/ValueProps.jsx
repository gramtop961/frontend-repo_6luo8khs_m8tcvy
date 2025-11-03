import React from 'react';
import { Truck, Wifi, CreditCard, Headphones } from 'lucide-react';

const items = [
  { icon: Truck, title: 'FREE Delivery in Casablanca' },
  { icon: Wifi, title: '20GB Data SIM Included' },
  { icon: CreditCard, title: 'Pay Only $30 to Reserve' },
  { icon: Headphones, title: '24/7 Local Support' },
];

export default function ValueProps() {
  return (
    <section className="mb-10">
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-1">
        {items.map(({ icon: Icon, title }, idx) => (
          <div
            key={idx}
            className="min-w-[260px] backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl p-4 text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#34E0A1] text-[#0F0F11]">
                <Icon className="w-5 h-5" />
              </div>
              <p className="font-medium">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
