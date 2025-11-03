import React from 'react';
import { Star, BadgeCheck, Tag } from 'lucide-react';

export default function FeaturedCar() {
  return (
    <section className="mb-10">
      <div className="rounded-2xl bg-white text-[#111827] shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1974&auto=format&fit=crop"
            alt="Mercedes GLA on Moroccan coast"
            className="h-64 w-full object-cover"
          />
          <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-[#0F0F11]/80 text-white px-3 py-1 text-sm">
            <Tag className="w-4 h-4 text-[#34E0A1]" />
            Perfect for Coastal Drives
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold">Mercedes GLA</h3>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm text-[#111827]">4.9</span>
              <span className="text-sm text-[#6B7280]">Booked 47 times</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-3xl font-bold">$45<span className="text-base font-medium text-[#6B7280]">/day</span></div>
            </div>
            <div className="inline-flex items-center gap-1 text-sm text-[#065F46] bg-[#D1FAE5] px-2 py-1 rounded-full">
              <BadgeCheck className="w-4 h-4" /> Verified by Mext
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 rounded-xl bg-[#34E0A1] text-[#0F0F11] font-semibold px-4 py-3 hover:brightness-110 active:brightness-95 transition">
              Reserve Now
            </button>
            <button className="flex-1 rounded-xl border border-[#E5E7EB] px-4 py-3 font-medium hover:bg-gray-50 transition">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
