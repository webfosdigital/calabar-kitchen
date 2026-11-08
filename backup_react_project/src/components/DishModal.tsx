import React, { useState } from 'react';
import { X, Flame, Plus, Check } from 'lucide-react';
import { MenuItem } from '../data/restaurantData';

interface DishModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onAddToCart: (dish: MenuItem, swallow?: string) => void;
}

export const DishModal: React.FC<DishModalProps> = ({
  dish,
  onClose,
  onAddToCart,
}) => {
  const [selectedSwallow, setSelectedSwallow] = useState<string>('Pounded Yam');
  const [added, setAdded] = useState(false);

  if (!dish) return null;

  const isSoup = dish.category === 'soups';
  const swallowOptions = ['Pounded Yam', 'Yellow Garri (Eba)', 'Semovita', 'Calabar Fufu (Akpu)', 'No Swallow'];

  const handleAdd = () => {
    onAddToCart(dish, isSoup && selectedSwallow !== 'No Swallow' ? selectedSwallow : undefined);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl border border-[#DFD7CB] shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Dish Image */}
        <div className="relative h-48 sm:h-64 bg-[#EFEAE1] shrink-0">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#E8C4A2] font-semibold">
                {dish.nativeName || 'Calabar Native Specialty'}
              </span>
              <h3 className="font-display text-2xl font-semibold text-white">
                {dish.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#F0EBE2]">
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-0.5 rounded bg-[#FAF3EE] text-[#B84A12] font-medium flex items-center gap-1 border border-[#F2DECE]">
                <Flame className="w-3.5 h-3.5" />
                {dish.spiceLevel} Spice
              </span>
              {dish.potStatus && (
                <span className="text-xs text-[#22673B] font-medium">
                  {dish.potStatus}
                </span>
              )}
            </div>
            <span className="font-display text-2xl font-bold text-[#1E1B18] tabular-nums">
              ₦{dish.price.toLocaleString()}
            </span>
          </div>

          <p className="text-sm text-[#5C5348] leading-relaxed">
            {dish.description}
          </p>

          {/* Full Ingredients List */}
          <div>
            <h4 className="text-xs font-semibold text-[#3A322A] uppercase tracking-wider mb-2">
              Authentic Ingredients
            </h4>
            <div className="flex flex-wrap gap-2">
              {dish.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="text-xs px-2.5 py-1 bg-[#FAF8F5] text-[#5C5348] border border-[#E8E2D8] rounded-md font-medium"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Swallow Selector for Soups */}
          {isSoup && (
            <div className="pt-2">
              <label className="block text-xs font-semibold text-[#3A322A] uppercase tracking-wider mb-2">
                Choose Traditional Swallow Accompaniment
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {swallowOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedSwallow(opt)}
                    className={`p-2 text-xs font-medium rounded-lg border text-center transition-all ${
                      selectedSwallow === opt
                        ? 'border-[#B84A12] bg-[#FAF3EE] text-[#B84A12] font-semibold'
                        : 'border-[#DFD7CB] bg-[#FAF8F5] text-[#5C5348] hover:border-[#C4B7A2]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action button */}
          <div className="pt-3 border-t border-[#F0EBE2] flex gap-3">
            <button
              onClick={handleAdd}
              className={`w-full py-3 text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm ${
                added
                  ? 'bg-[#22673B] text-white'
                  : 'bg-[#B84A12] text-white hover:bg-[#9E3E0E] active:scale-[0.99]'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Order Bag</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to Order — ₦{dish.price.toLocaleString()}</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
