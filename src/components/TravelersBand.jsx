import React from 'react';
import { Users } from 'lucide-react';

const avatars = [
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1548130149-a285ee16d87f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop',
];

export default function TravelersBand() {
  return (
    <section className="mb-16">
      <div className="text-center mb-4">
        <h4 className="text-white/90 text-lg font-medium">Join 12,000+ Happy Travelers</h4>
      </div>
      <div className="flex items-center justify-center gap-3">
        <div className="flex -space-x-3">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Traveler"
              className="h-10 w-10 rounded-full border-2 border-[#0F0F11] object-cover shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
            />
          ))}
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1">
          <Users className="w-4 h-4" />
          <span className="text-sm">Trusted by explorers worldwide</span>
        </div>
      </div>
    </section>
  );
}
