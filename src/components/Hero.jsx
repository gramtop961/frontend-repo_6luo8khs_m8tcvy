import React from 'react';
import Spline from '@splinetool/react-spline';
import { CalendarDays, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[700px] w-full overflow-hidden rounded-2xl mb-10">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/dRBdpY8aSqcdPO2y/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay - keep interactive scene tappable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#0F0F11]/80" />

      {/* Floating glass card */}
      <div className="relative z-10 flex h-full items-end p-6">
        <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl p-5 w-full max-w-xl shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
          <h1 className="font-semibold tracking-tight text-white text-3xl sm:text-4xl mb-4" style={{ fontFamily: 'Marmelad, Inter, system-ui' }}>
            Your Morocco Journey Starts Here
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="col-span-2 flex items-center gap-2 rounded-xl bg-white/80 text-[#111827] px-3 py-3">
              <CalendarDays className="w-5 h-5 opacity-70" />
              <div className="text-sm">
                <p className="font-medium leading-none">Travel Dates</p>
                <p className="text-xs opacity-80">Mar 15 – 22, 2025</p>
              </div>
            </div>
            <button className="rounded-xl bg-[#34E0A1] text-[#0F0F11] font-semibold px-4 py-3 hover:brightness-110 active:brightness-95 transition">
              Find My Perfect Car
            </button>
          </div>

          <div className="flex items-center gap-2 text-white/90">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
              <Users className="w-4 h-4" />
              <span className="text-sm">2,847 travelers this month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
