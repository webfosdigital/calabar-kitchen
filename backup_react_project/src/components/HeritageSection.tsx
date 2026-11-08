import React from 'react';
import { HERITAGE_STORIES } from '../data/restaurantData';

export const HeritageSection: React.FC = () => {
  return (
    <section id="heritage" className="py-20 bg-[#1E1A17] text-[#FAF8F5] border-b border-[#302A25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#D97434] mb-2">
            <span>Ancestral Cross River Tradition</span>
            <span aria-hidden="true" className="text-[#6E645A]">·</span>
            <span className="text-[#B5ACA2]">Calabar Hospitality in Rivers State</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white">
            Where Ancient Forest Harvests Meet Culinary Artistry
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#C7BDB1] leading-relaxed">
            In Cross River culture, cooking is not merely preparing food; it is an intimate expression of respect, patience, and honor for guests. 
            At Calabar Kitchen, we import our wild ukazi leaves, native uyayak pods, and aromatic peppers straight from Cross River soil directly to our kitchen at 41 & 42 Ikwerre Road.
          </p>
        </div>

        {/* 2-Column Split: Handcrafted Stories & High-Res Restaurant Ambiance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left stories (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            {HERITAGE_STORIES.map((story, idx) => (
              <div 
                key={story.title}
                className="border-b border-[#352E28] pb-6 last:border-b-0"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-xs font-mono text-[#D97434] tabular-nums">
                    0{idx + 1}.
                  </span>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {story.title}
                  </h3>
                </div>
                <p className="text-xs text-[#D97434]/90 uppercase tracking-wider font-medium mb-2 pl-7">
                  {story.subtitle}
                </p>
                <p className="text-sm text-[#B8ADA1] leading-relaxed pl-7">
                  {story.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Dining Ambiance Photo (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#3A332C] shadow-2xl">
              <img
                src="/assets/images/restaurant_ambiance_1794102730506.jpg"
                alt="Calabar Kitchen dining room atmosphere on Ikwerre Road Port Harcourt"
                className="w-full h-[460px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-wider font-medium text-[#D97434] mb-1">
                  The Calabar Kitchen Atmosphere
                </span>
                <p className="font-display text-xl font-medium text-white">
                  Warm Wood, Native Art, and Calabar Hospitality
                </p>
                <p className="text-xs text-[#D5CBC0] mt-1 max-w-md">
                  Whether you are dropping by for a solo bowl of piping hot White soup during work or gathering your family for Sunday lunch, our doors at 41 & 42 Ikwerre Road are wide open.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Cultural Botanical Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[#352E28]">
          <div className="bg-[#26211C] p-5 rounded-xl border border-[#3A332C]">
            <h4 className="font-display text-lg font-semibold text-white mb-1">Wild Ukazi (Afang)</h4>
            <p className="text-xs text-[#B5ACA2] leading-relaxed">
              Harvested deep from rainforest vines, sliced to hair-thin perfection, and pounded to release rich forest chlorophyll.
            </p>
          </div>
          <div className="bg-[#26211C] p-5 rounded-xl border border-[#3A332C]">
            <h4 className="font-display text-lg font-semibold text-white mb-1">Uyayak Pods</h4>
            <p className="text-xs text-[#B5ACA2] leading-relaxed">
              Roasted over open flame before being simmered into White Soup, creating an unmistakable aromatic and therapeutic aroma.
            </p>
          </div>
          <div className="bg-[#26211C] p-5 rounded-xl border border-[#3A332C]">
            <h4 className="font-display text-lg font-semibold text-white mb-1">River Periwinkles (Mfi)</h4>
            <p className="text-xs text-[#B5ACA2] leading-relaxed">
              Fresh river periwinkles meticulously washed and deshelled, infusing sea-fresh sweetness into every spoonful of Afang.
            </p>
          </div>
          <div className="bg-[#26211C] p-5 rounded-xl border border-[#3A332C]">
            <h4 className="font-display text-lg font-semibold text-white mb-1">Pure Dawn Palm Sap</h4>
            <p className="text-xs text-[#B5ACA2] leading-relaxed">
              Naturally effervescent, chilled and served raw in calabash cups — the ultimate companion to spicy pepper soup.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
