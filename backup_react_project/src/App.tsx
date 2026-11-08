/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DailyPotsSection } from './components/DailyPotsSection';
import { MenuSection } from './components/MenuSection';
import { HeritageSection } from './components/HeritageSection';
import { ReservationSection } from './components/ReservationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { DishModal } from './components/DishModal';
import { LegalModal } from './components/LegalModal';
import { MenuItem } from './data/restaurantData';
import { CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedDishForModal, setSelectedDishForModal] = useState<MenuItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (dish: MenuItem, swallow?: string) => {
    setCartItems((prev) => {
      const existingKey = `${dish.id}-${swallow || 'none'}`;
      const existingIndex = prev.findIndex((item) => item.id === existingKey);

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }

      // Add swallow price if applicable (swallows range from 700 to 1000)
      let additionalPrice = 0;
      if (swallow) {
        if (swallow.includes('Pounded Yam')) additionalPrice = 1000;
        else if (swallow.includes('Garri') || swallow.includes('Eba')) additionalPrice = 700;
        else if (swallow.includes('Semovita')) additionalPrice = 800;
        else if (swallow.includes('Fufu') || swallow.includes('Akpu')) additionalPrice = 700;
      }

      const newItem: CartItem = {
        id: existingKey,
        dish,
        selectedSwallow: swallow,
        quantity: 1,
        unitPrice: dish.price + additionalPrice,
      };

      return [...prev, newItem];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E1B18]">
      {/* 3-Zone Top Navigation Contract */}
      <Navbar
        cartItemCount={cartItemCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => scrollToSection('reservation')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onOpenReservation={() => scrollToSection('reservation')}
          onViewDailyPots={() => scrollToSection('daily-pots')}
        />

        {/* Live Daily Pots Section */}
        <DailyPotsSection
          onSelectItem={(dish) => setSelectedDishForModal(dish)}
          onOrderNow={(dish) => {
            handleAddToCart(dish);
            setIsCartOpen(true);
          }}
        />

        {/* Complete Menu Section */}
        <MenuSection
          onSelectItem={(dish) => setSelectedDishForModal(dish)}
          onAddToCart={(dish, swallow) => handleAddToCart(dish, swallow)}
        />

        {/* Ancestral Cross River Heritage & Dining Atmosphere */}
        <HeritageSection />

        {/* Table Reservation & Event Booking Section */}
        <ReservationSection />

        {/* Port Harcourt Diners Testimonials */}
        <TestimonialsSection />

        {/* Location (41 & 42 Ikwerre Rd, PH) & Contact Enquiry Form */}
        <LocationContactSection />
      </main>

      {/* Dynamic Automated Copyright Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Cart & Delivery Checkout Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Dish Quick Detail & Swallow Selector Modal */}
      <DishModal
        dish={selectedDishForModal}
        onClose={() => setSelectedDishForModal(null)}
        onAddToCart={(dish, swallow) => handleAddToCart(dish, swallow)}
      />

      {/* Privacy Policy & Terms Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
