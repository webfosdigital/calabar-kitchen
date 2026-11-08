import React from 'react';
import { ArrowDown, Flame, UtensilsCrossed, CalendarCheck } from 'lucide-react';
import { RESTAURANT_PROFILE } from '../data/restaurantData';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenReservation: () => void;
  onViewDailyPots: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMenu,
  onOpenReservation,
  onViewDailyPots,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split grid: Left Editorial Copy, Right High-Resolution Hero Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Dominant Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#1E1B18] font-semibold tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
              The Soul of Authentic Cross River Cuisine in Port Harcourt
            </h1>

            {/* Subtitle / Value proposition */}
            <p className="text-lg sm:text-xl text-[#524A40] leading-relaxed mb-8 max-w-2xl font-normal">
              Experience traditional Afang cooked with hand-shredded wild ukazi leaves and river periwinkles, 
              aromatic Afia Efere (White soup), rich Edikang Ikong, and our signature slow-simmered 404 native pepper soups. 
              Simmered fresh daily on Ikwerre Road.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreMenu}
                className="px-6 py-3.5 bg-[#B84A12] text-white font-medium rounded-lg hover:bg-[#9E3E0E] transition-all flex items-center gap-2 shadow-sm hover:shadow"
              >
                <UtensilsCrossed className="w-4 h-4 text-white" />
                <span>Explore Native Menu</span>
              </button>

              <button
                onClick={onOpenReservation}
                className="px-6 py-3.5 border border-[#3A322A] text-[#1E1B18] font-medium rounded-lg hover:bg-[#EFECE6] transition-colors flex items-center gap-2"
              >
                <CalendarCheck className="w-4 h-4 text-[#B84A12]" />
                <span>Book a Table</span>
              </button>

              <button
                onClick={onViewDailyPots}
                className="px-5 py-3 text-sm text-[#7C3F10] hover:text-[#582A07] font-semibold transition-colors flex items-center gap-1.5"
              >
                <Flame className="w-4 h-4 text-[#B84A12]" />
                <span>Check Today&apos;s Simmering Pots</span>
              </button>
            </div>

            {/* Authentic Cross River Pillars - Zero Pill Discipline */}
            <div className="pt-6 border-t border-[#E8E2D8] grid grid-cols-3 gap-3 sm:gap-6 text-left">
              <div>
                <p className="text-xl sm:text-2xl font-display font-semibold text-[#1E1B18] tabular-nums">100%</p>
                <p className="text-xs text-[#6B6155] mt-0.5">Native Cross River herbs & spices</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-display font-semibold text-[#1E1B18] tabular-nums">8:30 AM</p>
                <p className="text-xs text-[#6B6155] mt-0.5">Fresh morning pots daily</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-display font-semibold text-[#1E1B18] tabular-nums">River</p>
                <p className="text-xs text-[#6B6155] mt-0.5">Hand-cleaned native periwinkles</p>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): High-Fidelity Culinary Anchor Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E0D8CB] bg-[#EFEAE1] group">
              <img
                src="/assets/images/hero_calabar_kitchen_1794102728383.jpg"
                alt="Authentic Nigerian dining spread with Afang soup and pounded yam at Calabar Kitchen, Port Harcourt"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Subtle natural vignette overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase font-medium tracking-widest text-[#E8C4A2] mb-1">
                  Signature Daily Spread
                </span>
                <p className="font-display text-xl font-medium text-[#FAF8F5]">
                  Royal Afang Soup with Steaming Pounded Yam
                </p>
                <p className="text-xs text-[#D8D2C5] mt-1">
                  Served daily with tender assorted meats, smoked catfish, and river periwinkle.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
