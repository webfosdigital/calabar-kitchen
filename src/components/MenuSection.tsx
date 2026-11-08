import React, { useState, useMemo } from 'react';
import { Search, Plus, Eye, Flame, Check } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onAddToCart: (item: MenuItem, swallow?: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectItem,
  onAddToCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Complete Menu' },
    { id: 'soups', label: 'Native Soups' },
    { id: 'peppersoups', label: 'Pepper Soups ("404" & Meats)' },
    { id: 'swallows', label: 'Traditional Swallows' },
    { id: 'rice', label: 'Rice & Specialties' },
    { id: 'drinks', label: 'Palm Wine & Native Drinks' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.nativeName && item.nativeName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleQuickAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedNotice(item.id);
    setTimeout(() => {
      setAddedNotice((current) => (current === item.id ? null : current));
    }, 1800);
  };

  return (
    <section id="menu" className="py-20 bg-[#FAF8F5] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#B84A12] mb-2">
              <span>Authentic Recipes</span>
              <span aria-hidden="true">·</span>
              <span>Prepared Per Order</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1E1B18] font-semibold tracking-tight">
              Our Cross River Kitchen Menu
            </h2>
            <p className="mt-2 text-base text-[#5C5348] max-w-xl">
              Cooked with unadulterated Cross River ingredients, traditional clay-pot techniques, and generous portions of native meats and river catches.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Afang, White soup, 404..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#D5CDC0] rounded-lg text-sm text-[#1E1B18] placeholder-[#8A8073] focus:outline-none focus:ring-2 focus:ring-[#B84A12] focus:border-transparent transition-all"
            />
            <Search className="w-4 h-4 text-[#8A8073] absolute left-3.5 top-3.5" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-xs text-[#8A8073] hover:text-[#1E1B18]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Controls - Functional Interactive Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-[#1E1B18] text-[#FAF8F5] shadow-sm'
                  : 'bg-[#EFEAE1] text-[#4A4238] hover:bg-[#E4DDD1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid: 3-column desktop */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#F4EFE6] rounded-xl border border-dashed border-[#D5CDC0]">
            <p className="font-display text-lg text-[#1E1B18]">No dishes found matching your search</p>
            <p className="text-sm text-[#6C6255] mt-1">Try searching for Afang, White soup, 404 pepper soup, or pounded yam.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold bg-[#B84A12] text-white rounded-lg hover:bg-[#9E3E0E]"
            >
              Reset Search & Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((dish) => (
              <article
                key={dish.id}
                className="group bg-white rounded-xl border border-[#E2DBD0] overflow-hidden flex flex-col justify-between hover:border-[#C4B7A2] hover:shadow-md transition-all"
              >
                <div>
                  {/* Lead with imagery - 65% of card top */}
                  <div className="relative h-56 bg-[#EFEAE1] overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Quiet text badges - zero pill spam */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                      {dish.isChefSpecial && (
                        <span className="bg-[#1E1B18]/90 backdrop-blur-sm text-[#F5E6D3] text-[11px] font-semibold px-2 py-0.5 rounded tracking-wide">
                          Chef&apos;s Native Signature
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="bg-black/60 backdrop-blur-sm text-white text-[11px] px-2 py-0.5 rounded flex items-center gap-1">
                        <Flame className="w-3 h-3 text-[#E87A38]" />
                        {dish.spiceLevel}
                      </span>
                    </div>
                  </div>

                  {/* Card Content with strict metadata order */}
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-2 mb-1.5">
                      <h3 className="font-display text-xl font-semibold text-[#1E1B18] group-hover:text-[#B84A12] transition-colors leading-snug">
                        {dish.name}
                      </h3>
                      <span className="font-display text-lg font-bold text-[#1E1B18] tabular-nums whitespace-nowrap shrink-0">
                        ₦{dish.price.toLocaleString()}
                      </span>
                    </div>

                    {dish.nativeName && (
                      <p className="text-xs text-[#7A7064] italic mb-3">
                        {dish.nativeName}
                      </p>
                    )}

                    <p className="text-sm text-[#5C5348] leading-relaxed mb-4 line-clamp-3">
                      {dish.description}
                    </p>

                    {/* Unboxed ingredients preview */}
                    <div className="text-xs text-[#7A7064] border-t border-[#F0EBE2] pt-3">
                      <span className="font-medium text-[#4A4136]">Contains: </span>
                      <span>{dish.ingredients.slice(0, 4).join(' · ')}</span>
                      {dish.ingredients.length > 4 && <span> · +more</span>}
                    </div>
                  </div>
                </div>

                {/* Card Action Bar */}
                <div className="p-6 pt-0 border-t border-[#F0EBE2] flex items-center justify-between gap-3 mt-4">
                  <button
                    onClick={() => onSelectItem(dish)}
                    className="text-xs font-semibold text-[#5A5146] hover:text-[#1E1B18] flex items-center gap-1 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B84A12] rounded"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Dish Details</span>
                  </button>

                  <button
                    onClick={() => handleQuickAdd(dish)}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                      addedNotice === dish.id
                        ? 'bg-[#22673B] text-white'
                        : 'bg-[#B84A12] text-white hover:bg-[#9E3E0E] active:scale-95 shadow-sm'
                    }`}
                  >
                    {addedNotice === dish.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to Bag</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Order</span>
                      </>
                    )}
                  </button>
                </div>

              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
