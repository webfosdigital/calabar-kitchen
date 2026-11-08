import React from 'react';
import { Flame, Clock, Sparkles, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface DailyPotsProps {
  onSelectItem: (item: MenuItem) => void;
  onOrderNow: (item: MenuItem) => void;
}

export const DailyPotsSection: React.FC<DailyPotsProps> = ({
  onSelectItem,
  onOrderNow,
}) => {
  // Focus on the signature soups and pepper soups that simmer in large native pots daily
  const dailyPots = MENU_ITEMS.filter((item) => item.potStatus);

  return (
    <section id="daily-pots" className="py-16 bg-[#F4EFE6] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with quiet unboxed metadata */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#B84A12] mb-2">
            <span>Kitchen Live Pot Status</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#6C6357]">Simmered Fresh Every Morning</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#1E1B18] font-semibold tracking-tight">
            Today&apos;s Native Simmering Pots
          </h2>
          <p className="mt-3 text-base text-[#5A5146] leading-relaxed">
            In traditional Cross River dining, true flavor demands slow cooking in thick-bottomed pots. 
            Check which native pots are hot on the stove right now, check portion availability, and lock in your order before they finish.
          </p>
        </div>

        {/* Pots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dailyPots.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF8F5] rounded-xl border border-[#DFD7CB] p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Pot status strip */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#ECE6DB] text-xs">
                  <div className="flex items-center gap-1.5 font-medium">
                    {item.potStatus === 'Ready to Serve' && (
                      <span className="flex items-center gap-1 text-[#22673B]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Ready to Serve
                      </span>
                    )}
                    {item.potStatus === 'Simmering Fresh' && (
                      <span className="flex items-center gap-1 text-[#B84A12]">
                        <Flame className="w-3.5 h-3.5" />
                        Simmering Fresh
                      </span>
                    )}
                    {item.potStatus === 'Limited Portions' && (
                      <span className="flex items-center gap-1 text-[#9A5200]">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Limited Portions Left
                      </span>
                    )}
                  </div>
                  <span className="text-[#7A7064] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Piping Hot
                  </span>
                </div>

                {/* Dish image thumbnail & title */}
                <div className="flex gap-4 mb-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-[#DFD7CB] bg-[#EFEAE1]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#1E1B18] leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#7A7064] italic mt-0.5">{item.nativeName}</p>
                    <p className="text-base font-semibold text-[#1E1B18] mt-1 tabular-nums">
                      ₦{item.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#5C5348] line-clamp-2 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {item.recommendedSwallow && (
                  <p className="text-xs text-[#7A7064] mb-4">
                    <span className="font-medium text-[#4A4136]">Best paired with:</span> {item.recommendedSwallow}
                  </p>
                )}
              </div>

              {/* Action buttons */}
              <div className="pt-3 border-t border-[#ECE6DB] flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectItem(item)}
                  className="text-xs font-semibold text-[#7C3F10] hover:text-[#582A07] transition-colors"
                >
                  View Pot Ingredients
                </button>
                <button
                  onClick={() => onOrderNow(item)}
                  className="px-4 py-2 bg-[#B84A12] text-white text-xs font-medium rounded-lg hover:bg-[#9E3E0E] transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Order Portion</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick notice bar */}
        <div className="mt-8 p-4 rounded-xl bg-[#FAF8F5] border border-[#DFD7CB] flex flex-wrap items-center justify-between gap-4 text-xs text-[#63594D]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#B84A12] shrink-0" />
            <span>Need a custom bulk pot for your family, office lunch, or weekend gathering in Port Harcourt?</span>
          </div>
          <a
            href="https://wa.me/2349016607242?text=Hello%20Calabar%20Kitchen,%20I%20would%20like%20to%20enquire%20about%20ordering%20a%20family%20pot%20of%20soup."
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#B84A12] hover:text-[#9E3E0E] underline underline-offset-2 shrink-0"
          >
            Chat with our Head Chef on WhatsApp &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
