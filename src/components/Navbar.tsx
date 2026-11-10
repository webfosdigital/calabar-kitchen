import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Phone } from 'lucide-react';
import { RESTAURANT_PROFILE } from '../data/restaurantData';

interface NavbarProps {
  cartItemCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItemCount,
  onOpenCart,
  onOpenReservation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Today\'s Pots', href: '#daily-pots' },
    { label: 'Heritage', href: '#heritage' },
    { label: 'Reservation', href: '#reservation' },
    { label: 'Find Us', href: '#location' },
  ];

  return (
    <>
      {/* Main Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (4-5 Nav Links) — Zone 3 (1 Primary Action) */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3 sm:gap-8">
          
          {/* Zone 1: Single text element wordmark in display face */}
          <a 
            href="#" 
            className="flex flex-col group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A17] rounded"
          >
            <span className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#1E1B18] group-hover:text-[#B84A12] transition-colors">
              Calabar Kitchen
            </span>
            <span className="text-[14px] uppercase tracking-wider text-[#7C7267] font-medium mt-0.5">
              Cross River Native Cuisine
            </span>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#4A4238]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#B84A12] transition-colors py-1 relative hover:underline underline-offset-8 decoration-2 decoration-[#C85A17] whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action button & mobile trigger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-5 py-2 sm:py-2.5 bg-[#B84A12] text-white rounded-lg hover:bg-[#A03F0E] active:scale-[0.98] transition-all text-xs sm:text-sm font-medium shadow-sm hover:shadow whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B84A12]"
              aria-label={`View order bag with ${cartItemCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-white" />
              <span>Order <span className="hidden sm:inline">Online</span></span>
              {cartItemCount > 0 && (
                <span className="bg-white text-[#B84A12] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center tabular-nums">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#4A4238] hover:text-[#1E1B18] hover:bg-[#EFEAE1] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B84A12]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E8E2D8] bg-[#FAF8F5] px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4 text-base font-medium text-[#2E2822]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-[#B84A12] border-b border-[#EFEAE1] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-3 text-center border border-[#B84A12] text-[#B84A12] rounded-lg hover:bg-[#B84A12]/5 font-medium transition-colors"
                >
                  Book a Table
                </button>
                <a
                  href={`tel:${RESTAURANT_PROFILE.phone}`}
                  className="w-full py-3 text-center bg-[#1E1B18] text-[#FAF8F5] rounded-lg hover:bg-black font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C85A17]" />
                  Call {RESTAURANT_PROFILE.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
