import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#B84A12] mb-2">
            <span>Diner Experiences</span>
            <span aria-hidden="true">·</span>
            <span>Voices from Port Harcourt</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#1E1B18] font-semibold tracking-tight">
            Loved by Calabar Natives & Food Explorers Alike
          </h2>
          <p className="mt-3 text-base text-[#5C5348] leading-relaxed">
            From residents living in Old GRA and D-Line to oil professionals working in Trans-Amadi, our diners return for one reason: genuine, uncompromised native Cross River flavors.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl border border-[#DFD7CB] p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#C85A17] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C85A17]" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-[#DFD7CB] mb-2" />

                <p className="text-sm text-[#4A4136] leading-relaxed italic mb-6">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EBE2]">
                <p className="font-display font-semibold text-sm text-[#1E1B18]">
                  {t.name}
                </p>
                <p className="text-xs text-[#7A7064] mt-0.5">
                  {t.location}
                </p>
                <p className="text-xs text-[#7C3F10] font-medium mt-2">
                  Favorite Dish: {t.favoriteDish}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
